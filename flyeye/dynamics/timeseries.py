__author__ = 'Sebastian Bernasek'

import matplotlib.pyplot as plt
from .averages import plot_mean, plot_mean_interval


class TimeseriesPlot:
    """
    Object describes a 1D timeseries.

    Attributes:

        x (np.ndarray) - independent variable

        y (np.ndarray) - dependent variable

        ax (matplotlib.axes.AxesSubplot)

    """

    def __init__(self, x, y, ax=None):
        """
        Instantiate a 1D timeseries.

        Args:

            x (np.ndarray) - independent variable

            y (np.ndarray) - dependent variable

            ax (matplotlib.axes.AxesSubplot)

        """

        self.x = x
        self.y = y

        # set axis
        if ax is None:
            ax = self.create_figure()
        self.ax = ax

    def create_figure(self):
        """ Instantiate figure. """
        fig, ax = plt.subplots(ncols=1, figsize=(3, 2))
        ax.set_xlim(self.x.min(), self.x.max())
        ax.set_ylim(0, 1.1*self.y.max())
        ax.set_xlabel('time', fontsize=10),
        ax.set_ylabel('expression (a.u.)', fontsize=10)
        return ax

    def scatter(self,
                 color='k',
                 alpha=1,
                 s=1,
                 rasterized=False):
        """
        Scatterplot markers for x and y data.

        Args:

            color (str) - marker color

            alpha (float) - marker alpha

            s (float) - marker size

            rasterized (bool) - if True, rasterize markers

        """
        marker_kw = dict(color=color, s=s, alpha=alpha, lw=0, rasterized=rasterized)
        _ = self.ax.scatter(self.x, self.y, **marker_kw)

    def average(self,
            ma_type='savgol',
            window_size=100,
            resolution=1,
            smooth=True,
            color='k',
            alpha=1,
            lw=1,
            linestyle=None, **addtl):
        """
        Plot moving average of x and y data.

        Args:

            ma_type (str) - type of average, 'savgol', 'sliding', or 'binned'

            window_size (int) - size of sliding window or bin (num of cells)

            resolution (int) - sampling resolution for confidence interval

            smooth (bool) - if True, apply secondary savgol filter

            color, alpha, lw, linestyle - formatting parameters

        """

        ma_kw = dict(ma_type=ma_type, window_size=window_size, resolution=resolution, smooth=smooth)
        line_kw = dict(line_color=color, line_alpha=alpha, line_width=lw, linestyle=linestyle)

        if len(self.y) > window_size:
            _ = plot_mean(self.x, self.y, ax=self.ax, **ma_kw, **line_kw)

    def interval(self,
            ma_type='sliding',
            window_size=100,
            resolution=25,
            nbootstraps=1000,
            confidence=95,
            color='k',
            alpha=0.5,
            **additional):
        """
        Plot confidence interval for moving average of x and y data.

        Args:

            ma_type (str) - type of moving average, 'sliding' or 'binned'

            window_size (int) - size of sliding window or bin (num of cells)

            resolution (int) - sampling resolution for confidence interval

            nbootstraps (int) - number of bootstraps

            confidence (float) - confidence interval, between 0 and 100

            color, alpha - formatting parameters

        """

        # define moving average keyword arguments
        ma_kw = dict(ma_type=ma_type,
                     window_size=window_size,
                     resolution=resolution,
                     nbootstraps=nbootstraps,
                     confidence=confidence)

        # define interval shading keyword arguments
        shade_kw = dict(color=color, alpha=alpha)

        # plot confidence interval
        if len(self.y) > window_size:
            plot_mean_interval(self.x,
                                  self.y,
                                  ax=self.ax,
                                  **ma_kw,
                                  **shade_kw)

    def plot(self,
             scatter=False,
             average=True,
             interval=False,
             marker_kw={},
             line_kw={},
             interval_kw={},
             ma_kw={}):
        """
        Plot timeseries data.

        Args:

            scatter (bool) - if True, add datapoints

            average (bool) - if True, add moving average

            interval (bool) - if True, add moving average interval

            marker_kw (dict) - keyword arguments for marker formatting

            line_kw (dict) - keyword arguments for line formatting

            interval_kw (dict) - keyword arguments for interval formatting

            ma_kw (dict) - keyword arguments for moving average

        """

        # add scattered data
        if scatter:
            self.scatter(**marker_kw)

        # add moving average
        if average:
            self.average(**ma_kw, **line_kw)

        # add confidence interval for moving average
        if interval:
            self.interval(**ma_kw, **interval_kw)


class IntervalPlot(TimeseriesPlot):
    """
    Object describes the 95% confidence interval for a 1D timeseries.

    Attributes:

        x (np.ndarray) - independent variable

        y_lower (np.ndarray) - lower bound for dependent variable

        y_upper (np.ndarray) - upper bound for dependence variable

        y (np.ndarray) - mean or median value for dependent variable

        ax (matplotlib.axes.AxesSubplot)

    """

    def __init__(self, x, y_lower, y_upper, y=None, ax=None):
        """
        Instantiate a 1D timeseries.

        Args:

            x (np.ndarray) - independent variable

            y_lower (np.ndarray) - lower bound for dependent variable

            y_upper (np.ndarray) - upper bound for dependence variable

            y (np.ndarray) - median value for dependent variable

            ax (matplotlib.axes.AxesSubplot)

        """

        self.x = x
        self.y = y
        self.y_lower = y_lower
        self.y_upper = y_upper

        # set axis
        if ax is None:
            ax = self.create_figure()
        self.ax = ax

    def average(self,
            smooth=True,
            color='k',
            alpha=1,
            lw=1,
            linestyle=None, **addtl):
        """
        Plot moving average of x and y data.

        Args:

            smooth (bool) - if True, apply first-order savgol filter

            color, alpha, lw, linestyle - formatting parameters

        """
        line_kw = dict(color=color, lw=lw, alpha=alpha, linestyle=linestyle)
        self.ax.plot(self.x, self.y, **line_kw)

    def interval(self,
            color='k',
            alpha=0.5,
            **additional):
        """
        Plot confidence interval for moving average of x and y data.

        Args:

            color, alpha - formatting parameters

        """
        shade_kw = dict(color=color, alpha=alpha)
        self.ax.fill_between(self.x, self.y_lower, self.y_upper, **shade_kw)

    def plot(self,
             average=True,
             interval=False,
             line_kw={},
             interval_kw={}):
        """
        Plot timeseries data.

        Args:

            average (bool) - if True, add moving average

            interval (bool) - if True, add moving average interval

            line_kw (dict) - keyword arguments for line formatting

            interval_kw (dict) - keyword arguments for interval formatting

        """

        # add moving average
        if average:
            self.average(**line_kw)

        # add confidence interval for moving average
        if interval:
            self.interval(**interval_kw)
