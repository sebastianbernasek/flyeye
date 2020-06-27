Search.setIndex({docnames:["contact","documentation","index","installation","modules/analysis","modules/data","modules/dynamics","modules/processing","start","usage"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":1,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["contact.rst","documentation.rst","index.rst","installation.rst","modules/analysis.rst","modules/data.rst","modules/dynamics.rst","modules/processing.rst","start.rst","usage.rst"],objects:{"flyeye.analysis":{correlation:[4,0,0,"-"],spectrogram:[4,0,0,"-"]},"flyeye.analysis.correlation":{CorrelationData:[4,1,1,""],SpatialCorrelation:[4,1,1,""]},"flyeye.analysis.correlation.CorrelationData":{bootstrap:[4,2,1,""],get_binned_stats:[4,3,1,""],visualize:[4,4,1,""]},"flyeye.analysis.correlation.SpatialCorrelation":{get_covariance_vector:[4,2,1,""],get_distances_vector:[4,2,1,""],get_matrix_upper:[4,3,1,""]},"flyeye.analysis.spectrogram":{Spectrogram:[4,1,1,""]},"flyeye.analysis.spectrogram.Spectrogram":{add_power:[4,4,1,""],compute_thresholds:[4,4,1,""],evaluate_periodogram:[4,4,1,""],full_visualization:[4,4,1,""],plot_samples:[4,4,1,""],plot_spectrogram:[4,4,1,""],simple_visualization:[4,4,1,""]},"flyeye.data":{cells:[5,0,0,"-"],discs:[5,0,0,"-"],experiments:[5,0,0,"-"],image:[5,0,0,"-"],silhouette:[5,0,0,"-"]},"flyeye.data.cells":{CellProperties:[5,1,1,""],Cells:[5,1,1,""]},"flyeye.data.cells.CellProperties":{cell_types:[5,5,1,""],channels:[5,5,1,""],normalized_channels:[5,5,1,""],num_channels:[5,5,1,""]},"flyeye.data.cells.Cells":{annotate_fraction:[5,3,1,""],apply_lag:[5,4,1,""],get_binned_mean:[5,3,1,""],get_nuclear_diameter:[5,4,1,""],plot_dynamics:[5,4,1,""],plot_resampled_dynamics:[5,4,1,""],plot_spectrogram:[5,4,1,""],scatterplot:[5,4,1,""],select_by_position:[5,4,1,""],select_cell_type:[5,4,1,""],sort:[5,4,1,""]},"flyeye.data.discs":{Disc:[5,1,1,""],DiscProperties:[5,1,1,""]},"flyeye.data.discs.Disc":{apply_lag:[5,4,1,""],apply_time_scaling:[5,4,1,""],detrend:[5,4,1,""],flip_about_xy:[5,4,1,""],flip_about_yz:[5,4,1,""],from_silhouette:[5,3,1,""],get_multipotent_layers:[5,4,1,""],load_imagestack:[5,4,1,""],normalize_by_reference:[5,4,1,""],normalize_expression:[5,4,1,""],set_ratio:[5,4,1,""],standardize_labels:[5,4,1,""]},"flyeye.data.discs.DiscProperties":{is_flipped_about_xy:[5,5,1,""],is_flipped_about_yz:[5,5,1,""],path:[5,5,1,""]},"flyeye.data.experiments":{Experiment:[5,1,1,""]},"flyeye.data.experiments.Experiment":{align_discs:[5,4,1,""],align_to_first_r8:[5,4,1,""],apply_lag:[5,4,1,""],get_cells:[5,4,1,""],get_early_neuron_data:[5,4,1,""],get_pairwise_alignment:[5,4,1,""],get_spatial_correlations:[5,4,1,""],load:[5,3,1,""],num_discs:[5,5,1,""],num_progenitors:[5,5,1,""],select_by_concurrency:[5,4,1,""],set_ratio:[5,4,1,""]},"flyeye.data.image":{Image:[5,1,1,""],ImageStack:[5,1,1,""],ScalarField:[5,1,1,""],Smoothing:[5,1,1,""]},"flyeye.data.image.Image":{build_colorfilter:[5,4,1,""],from_tiff:[5,3,1,""],load_image:[5,3,1,""],render:[5,4,1,""]},"flyeye.data.image.ImageStack":{from_silhouette:[5,3,1,""],get_layer:[5,4,1,""],project_max:[5,4,1,""],project_mean:[5,4,1,""]},"flyeye.data.image.ScalarField":{abs_max:[5,5,1,""],apply_colormap:[5,4,1,""],apply_filter:[5,4,1,""],fliplr:[5,4,1,""],from_8bit:[5,3,1,""],get_crop_indices:[5,4,1,""],max:[5,5,1,""],min:[5,5,1,""],render:[5,4,1,""],rotate:[5,4,1,""],save:[5,4,1,""],smooth:[5,4,1,""],uint8_to_float32:[5,3,1,""]},"flyeye.data.image.Smoothing":{grey_closing:[5,3,1,""],median_filter:[5,3,1,""]},"flyeye.data.silhouette":{Silhouette:[5,1,1,""],SilhouetteData:[5,1,1,""]},"flyeye.data.silhouette.Silhouette":{flip_about_xy:[5,4,1,""],flip_about_yz:[5,4,1,""],is_flipped_about_xy:[5,5,1,""],is_flipped_about_yz:[5,5,1,""],load_orientation:[5,4,1,""],read_json:[5,4,1,""],write_feed:[5,4,1,""],write_feud:[5,4,1,""],write_json:[5,4,1,""]},"flyeye.data.silhouette.SilhouetteData":{compile_measurements:[5,4,1,""],labels:[5,5,1,""],load:[5,4,1,""],load_measurements:[5,4,1,""],parse_contour:[5,3,1,""],read_contours:[5,4,1,""],read_labels:[5,4,1,""],save_measurements:[5,4,1,""]},"flyeye.dynamics":{averages:[6,0,0,"-"],resampling:[6,0,0,"-"],visualization:[6,0,0,"-"]},"flyeye.dynamics.averages":{apply_custom_roller:[6,6,1,""],bootstrap:[6,6,1,""],detrend_signal:[6,6,1,""],get_binned_mean:[6,6,1,""],get_rolling_gaussian:[6,6,1,""],get_rolling_mean:[6,6,1,""],get_rolling_mean_interval:[6,6,1,""],get_rolling_window:[6,6,1,""],get_running_mean:[6,6,1,""],savgol:[6,6,1,""],subsample:[6,6,1,""]},"flyeye.dynamics.resampling":{DiscResampler:[6,1,1,""]},"flyeye.dynamics.resampling.DiscResampler":{apply:[6,4,1,""],bootstrap:[6,4,1,""],confidence_interval:[6,5,1,""],generate_point_estimates:[6,4,1,""],mean:[6,5,1,""],roll:[6,4,1,""],subsample_discs:[6,4,1,""]},"flyeye.dynamics.visualization":{IntervalPlot:[6,1,1,""],TimeseriesPlot:[6,1,1,""],plot_mean:[6,6,1,""],plot_mean_interval:[6,6,1,""]},"flyeye.dynamics.visualization.IntervalPlot":{average:[6,4,1,""],interval:[6,4,1,""],plot:[6,4,1,""]},"flyeye.dynamics.visualization.TimeseriesPlot":{average:[6,4,1,""],create_figure:[6,4,1,""],interval:[6,4,1,""],plot:[6,4,1,""],scatter:[6,4,1,""]},"flyeye.processing":{triangulation:[7,0,0,"-"]},"flyeye.processing.triangulation":{ExperimentTriangulation:[7,1,1,""],Triangulation:[7,1,1,""]},"flyeye.processing.triangulation.ExperimentTriangulation":{plot_expression:[7,4,1,""],show_alignment:[7,4,1,""],show_triangulations:[7,4,1,""]},"flyeye.processing.triangulation.Triangulation":{add_edges_to_plot:[7,4,1,""],get_disc:[7,4,1,""],overlay_epression:[7,4,1,""],plot_expression:[7,4,1,""],plot_histogram:[7,4,1,""],show:[7,4,1,""],triangulate:[7,4,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","classmethod","Python class method"],"3":["py","staticmethod","Python static method"],"4":["py","method","Python method"],"5":["py","attribute","Python attribute"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:classmethod","3":"py:staticmethod","4":"py:method","5":"py:attribute","6":"py:function"},terms:{"boolean":5,"class":[4,5,6,7],"default":5,"float":[4,5,6,7],"function":[4,5,6,9],"import":[5,8,9],"int":[4,5,6],"new":5,"return":[4,5,6,7],"static":[2,4,5],"true":[4,5,6,7],"while":5,But:[],For:[0,8,9],IDs:5,One:8,The:[0,2,3,5,7,8],These:[5,8],_flux:9,about:5,abov:5,abs_max:5,absolut:5,access:[5,8],accord:8,across:[5,6,8],add:[5,6,7],add_edges_to_plot:7,add_pow:4,added:[4,6],addit:[6,8],addon:3,addtl:6,adher:8,adjac:[4,7],after:[],against:8,age:[2,8],aggreg:[4,5],align:5,align_bi:5,align_disc:5,align_to_first_r8:5,all:[5,7,8],all_label:5,alpha:[5,6],also:8,altern:[5,8],amar:0,analysi:[1,5,8,9],analyz:[1,2,6,9],angl:[5,7],ani:[0,8],annot:[4,5,7,8],annotate_fract:5,anticip:8,appear:8,appli:[4,5,6],applic:0,apply_colormap:5,apply_custom_rol:6,apply_filt:5,apply_lag:5,apply_time_sc:5,approxim:5,area:5,arg:[4,5,6,7],argument:[4,5,6],arrai:[4,5,6],assess:4,assign:8,assum:8,astroml:[3,4],attribut:[4,5,6,7],author:0,auto_align:5,autom:[],automat:8,avail:8,averag:[4,5,8],axes:[4,5,6,7],axessublot:4,axessubplot:[4,5,6],axi:[4,5,6,7],background:5,bagheri:[],base:[4,8],basi:5,basic:[8,9],becom:5,been:8,befor:[5,8],behavior:5,below:[8,9],beta:[],between:[4,5,6,7,8],bin:[4,5,6],bin_cent:5,bin_width:5,biolog:[],bit:5,bit_depth:5,black:7,blue:8,bool:[4,5,6,7],boostrap:4,bootstrap:[4,6],bottom:5,bound:[4,5,6],boundari:5,brief:9,bug:0,build:5,build_colorfilt:5,built:5,c_ij:4,can:5,cell:[2,4,6,7,8,9],cell_typ:[5,9],cellproperti:5,center:[4,5],centroid_x:5,ch0:9,ch1_norm:[],ch1_normal:5,channel:[4,5,7,8],check:2,chemic:[],circl:5,classmethod:4,clear:[],close:5,cmap:[5,7],cmyk:7,code:0,collect:[5,8],color:[4,5,6,7,8],color_wheel:7,colorfilt:5,colormap:5,colorscal:5,colorschem:5,column:[4,5,7],combin:[5,8],compar:5,compat:5,compil:5,compile_measur:5,complementari:1,complet:5,compon:[4,5,7],compress:8,compris:5,comput:[5,6],compute_threshold:4,concurr:5,condit:[5,8],confid:[4,5,6],confidence_interv:6,connect:7,construct:[5,7],constructor:8,contain:[4,5,8,9],content:[5,8],contigu:8,contour:[5,8],contour_id:5,conveni:8,convers:5,convert:[1,5,7],coordin:5,copi:5,corr:5,correl:5,correlationdata:4,correspond:[4,5,8],covari:4,creat:[4,5,8],create_figur:6,cross:5,ctr_list:5,current:6,custom:[],d_ij:4,data:[1,2,4,6,7],datafram:[4,5,6],datapoint:6,dataset:8,decomposit:4,defin:5,delaunai:7,den:5,depart:[],depend:[3,5,6],depth:5,describ:[5,6],descript:1,design:8,desir:[4,5],detail:[1,9],detect:[1,2,3,4],determin:[4,5],detrend:[5,6],detrend_sign:6,develop:[0,4,8],development:[2,5,7,8,9],diamet:5,dict:[4,5,6,7],dictionari:[5,6],dimens:5,dimension:6,directli:5,directori:[5,8],dirpath:5,disc:[2,6,7,8,9],disc_id:[5,6,9],discalign:5,discproperti:5,discresampl:6,discret:[5,6],discs_includ:5,dissect:8,distanc:[4,5,7],distribut:7,document:[8,9],doe:5,doesn:6,dominant_frequ:4,dominant_period:4,don:0,download:[],dpi:5,drosophila:[2,4],dure:[5,8,9],dynam:[1,2,5,7],each:[4,5,6,7,8],earli:5,edg:[4,5,7],either:[4,6],email:0,empir:6,enabl:[],engin:[],ensur:5,entail:5,entir:9,entri:5,equival:[5,8],error:4,error_bar:6,estim:[4,6,7],evalu:[4,6,7,8],evaluate_periodogram:4,exampl:8,except:5,exclud:5,exist:[6,7],expand:[],experi:[7,8,9],experiment:[5,8],experiment_a:8,experiment_z:8,experimenttriangul:7,express:[1,2,4,5,6,7,8,9],extens:5,eye0:8,eye:[4,5,6,7,8,9],eyen:8,facilit:[2,8],factor:7,fals:[4,5,6,7],familiar:8,fast:5,fastest:[6,8],featur:0,feed:[5,8],feel:8,feud:[5,8],field:[4,5],fig:5,figsiz:7,figur:[4,5,6],file:[2,5,8,9],filenam:5,filepath:5,files:[],filetyp:[5,8],filter:[5,6,7],filtrat:6,first:[5,6,8],first_r8:5,fit:[5,6],flag:5,flexibl:6,flip:5,flip_about_xi:5,flip_about_yz:5,fliplr:5,float32:5,fluctuat:[4,5,6],fluctuations_channel:9,fluoresc:[5,7,8],fluorescence_channel:[],fly:[],flyey:[0,1,3,4,5,6,7,8,9],fmt:5,follow:5,format:[4,5,6],format_channel:[],frac:6,fraction:[5,6],free:8,frequenc:[3,4,5],from:[2,5,6,8,9],from_8bit:5,from_silhouett:[5,8,9],from_tiff:5,fruit:[],full:[],full_visu:4,fulli:8,func:[5,6],furrow:[5,7,8],furrow_veloc:[5,7],further:[],futur:[5,8],gain:8,gaussian:6,gene:[2,8],gener:[5,6,7,8],generate_point_estim:6,get:[2,4,9],get_binned_mean:[5,6],get_binned_stat:4,get_cel:5,get_covariance_vector:4,get_crop_indic:5,get_disc:7,get_distances_vector:4,get_early_neuron_data:5,get_early_neuron_df:[],get_lay:5,get_matrix_upp:4,get_multipotent_lay:5,get_nuclear_diamet:5,get_pairwise_align:5,get_rolling_gaussian:6,get_rolling_mean:6,get_rolling_mean_interv:6,get_rolling_window:6,get_running_mean:6,get_spatial_correl:5,github:0,given:2,golai:6,govern:8,graph:7,green:8,grei:[5,6],grey_clos:5,group:4,gs_parent:7,guid:2,hand:8,has:8,help:2,hesit:0,heterogen:9,highest:8,histogram:7,horizont:[5,7],hour:5,hours_per_pixel:7,howev:8,html:[],http:[],identifi:5,idx:6,ignor:[5,8],im_float32:5,im_uint8:5,imag:[],imagestack:5,imagin:2,implement:[1,6],impress:[],imread:5,includ:[4,5,6,7,8],include_express:7,include_i:7,include_unlabel:5,include_x:7,independ:6,index:[5,6,8],indic:[5,6],individu:[4,5,7,8,9],inf:5,infer:2,inherit:[4,5],initi:[5,8],input:9,inquiri:0,instal:[],instanc:[5,8],instanti:[5,6,8],instruct:9,integ:8,intend:[],intens:[5,8],inter:7,interest:[],interfac:5,intern:4,interpol:6,interquantil:5,interv:[4,5,6],interval_kw:[4,5,6],interval_resolut:6,intervalplot:6,invers:[5,7],invert:5,is_flipped_about_xi:5,is_flipped_about_yz:5,is_subplot:7,iter:5,its:[0,1,8],json:[5,8],kei:[5,6],keyword:[4,5,6],kwarg:[4,5,6,7],lab:0,label:[4,5,6,8],lag:5,largest:4,later:[],latest:[],layer:[5,8],layer_id:5,layer_numb:8,leav:8,left:5,legend:7,length:[4,5,6,7],level:[4,5,8],librari:4,like:[4,5,6],limit:6,line2d:6,line:[4,5,6],line_alpha:6,line_color:6,line_kw:[5,6],line_width:6,linearsegmentedcolormap:7,linestyl:6,list:[5,6],load:5,load_imag:5,load_imagestack:5,load_measur:5,load_orient:5,local:[5,8],log2:5,lomb:[4,5],lower:[4,5,6],lower_slip:5,lowpass:6,ma_kw:[4,5,6],ma_typ:[6,7],mai:5,maintain:[],manag:[1,5],manner:8,manual:5,manuscript:[],map:[5,8],mark:8,marker:[4,5,6,8],marker_kw:[5,6],markers:6,matplotlib:[3,5,6,7],matrix:4,max:[4,5,7],max_angl:7,max_dist:4,max_lay:5,max_valu:5,maximum:5,mean:[4,5,6,8],measur:[1,2,4,5,6,7,8],median:[5,6,7],median_filt:5,memori:8,metadata:8,method:[3,5,6],microscopi:[2,8],midlin:5,min:[5,7],min_angl:7,min_lay:5,minimum:5,model:6,modif:[],more:[2,5],most:8,move:[4,5,8],mpl:[4,5],multi:6,multipl:[5,6],multipli:7,multipot:5,must:[5,8],n_out:6,name:[5,6,7,8],nbootstrap:[4,6],ndarrai:[4,5,6,7],need:[],neg:5,neuron:7,niter:5,nomin:[],non:6,none:[4,5,6,7],norm:6,normal:[4,5,8],normalize_by_refer:5,normalize_express:5,normalized_channel:5,northwestern:0,note:5,now:8,nth:8,nuclear:[5,8],nuclear_diamet:5,nuclei:8,null_model:4,num:[5,6],num_channel:5,num_disc:5,num_progenitor:5,number:[4,5,6,8],object:[4,5,6,7],obtain:[5,6,7],occur:5,offer:8,offset:5,often:5,older:5,omega:4,one:[2,5,6,8],onli:[4,5,8],oper:[5,8,9],option:3,order:[4,5,6,8],organ:[1,5],orient:5,origin:[5,8],oscil:4,other:5,our:[2,8,9],out:[0,2,5],outlier:5,output:6,over:6,overlap:6,overlay_epress:7,own:[2,8],packag:2,page:[],pair:[5,7,8],pairwis:[4,5],panda:[3,5],param:7,paramet:[4,5,6,7,8],parametr:6,parse_contour:5,part:2,particular:8,path:5,path_to_disc:8,path_to_experi:[8,9],path_to_silhouette_fil:9,pattern:[1,2,4],peak:4,per:[5,8],perform:[6,8],period:[4,5],periodogram:[4,5],permit:6,photoreceptor:[7,9],pil:5,pillow:5,pip:3,pixel:[5,8],place:5,plane:5,platform:[0,2],pleas:[0,1,8,9],plot:[4,5,6,7,9],plot_dynam:[5,9],plot_express:7,plot_histogram:7,plot_mean:6,plot_mean_interv:6,plot_resampled_dynam:5,plot_sampl:4,plot_spectrogram:[4,5],png:[5,8],pnt:[8,9],point:[5,6],point_estim:6,polynomi:6,polyord:[5,6],pool:6,popul:[5,6,7],portion:4,posit:[4,5,6,7],possibl:[],power:[4,5],pre:[5,9],precursor:5,preserv:5,primari:0,primarili:4,prior:8,process:[1,5,8],progenitor:5,project:5,project_max:5,project_mean:5,properti:5,protein:6,provid:[4,5,6,7,8,9],proxim:8,pypi:3,python:3,qualiti:5,quantif:8,quantifi:[1,2,4],quantil:[5,7],quantit:5,quantiti:4,queri:[1,2],question:0,random:6,rang:[5,9],raster:6,rather:8,ratio:[5,8],raw:[7,8],reach:0,read:[5,8],read_contour:5,read_json:5,read_label:5,readi:8,recommend:8,recompil:5,record:5,red:8,refer:[4,5,8,9],reference_channel:[],reference_typ:5,reflect:8,regard:0,region:8,regularli:[],rel:[5,7],relax:[],releas:8,reli:[],remain:[7,8],remov:5,render:5,repeat:4,replac:6,replic:[],report:[0,8],reporter_channel:9,repres:5,represent:8,request:0,requir:[5,8,9],resampl:[5,6],resampling_kw:5,reserv:8,residu:6,resolut:[5,6],respect:8,retin:[],rgb:[5,8],rgbmg:5,right:5,roll:6,rotat:5,row:4,run:[6,7],same:[4,5],sampl:[4,6],save:5,save_measur:5,savgol:6,savitzki:6,scalar:5,scalarfield:5,scale:[5,6,7],scargl:[4,5],scatter:[4,5,6,7],scatterplot:[5,6],scheme:5,scipi:[3,6,7],score:5,sebastianbernasek:[],secondari:6,section:[5,8],see:[8,9],segment:[5,8],segment_id:5,select:[1,2,5,9],select_by_concurr:5,select_by_posit:[5,9],select_cell_typ:[5,9],selection_kw:5,separ:[4,8],separar:5,sequenti:[5,6],seri:[5,6],serial:5,set:[5,6],set_ratio:5,sever:[1,5,8],shape:5,shift:5,should:[5,8],show:[4,7],show_align:7,show_triangul:7,shuffl:4,sidebar:[],signal:[4,6],signific:4,sihouett:8,silhouett:[2,8],silhouettedata:5,similar:[4,5,8],simple_visu:4,simplest:3,singl:[5,8],size:[5,6],skip:5,slice:6,slide:[6,7],slow:5,slower:6,smooth:[4,5,6],some:[8,9],sort:5,sourc:[4,5,6,7],space:[],span:5,spatial:[1,2,5,7],spatialcorrel:[4,5],specif:[0,6,9],specifi:[5,6,8],spectral:[4,5],spectrogram:5,spline:6,stack:[5,8],standard:[],standardize_channel:[],standardize_label:5,start:[2,9],stat:[4,6],statist:4,store:5,str:[4,5,6],string:8,structur:8,studi:[2,8,9],subject:5,submodul:[1,5],subpopul:5,subsampl:[5,6],subsample_disc:6,subsequ:8,subset:5,suggest:[],suitabl:8,support:8,survei:9,take:5,taken:5,tar:[],target:5,test:[4,5],text:5,than:[6,8],thei:8,them:6,therefor:8,thi:[5,6,8],three:[5,8],threshold:[4,7],thu:[],time:[5,6,7,9],timepoint:[1,4,5,7],timeseri:4,timeseriesplot:6,tip:[2,8],tmax:[5,9],tmin:[5,9],tool:[4,6,7],top:5,trajectori:7,transpar:5,trend:[6,8],trendatait:5,trendfit:[],tri:7,triangl:4,triangul:5,triangular:4,trigger:8,tupl:5,tutori:[],twin:7,two:[5,8],type:[2,5,6,8,9],uint8:5,uint8_to_float32:5,unaffect:5,under:[5,8],uniqu:5,unit:4,univari:6,univers:0,unlabel:[5,8],upon:[4,5,8],upper:[4,5,6],upper_slip:5,use:[4,5,8],used:[4,5,6,8],user:[2,8],using:[2,5,6,8],valu:[4,5,6,7,8],values_per_disc:6,variabl:6,vector:[4,5,6],veloc:[5,7,8],veri:9,version:8,versu:4,vertic:[5,7],via:[0,3,4],visual:[1,2,4,5,7,8],vivo:[],vmax:5,vmin:5,wai:8,wavelength:8,well:8,where:5,whether:5,which:[4,5,6],wide:[5,9],width:5,window:[5,6],window_s:[5,6,7],within:[4,5,6,7,8],without:[],work:8,would:[],write:5,write_fe:5,write_feud:5,write_json:5,xaxi:4,xmax:5,xmin:5,xoffset:7,xycoord:7,y_lower:6,y_onli:[4,5],y_upper:6,yan:[8,9],ymax:5,ymin:5,you:[],youngest:[],your:[2,8],zero:[4,5,8],zmax:5,zmin:5},titles:["Contact Us","Documentation","FlyEye Analysis","Installation","Analysis Module","Data Module","Dynamics Module","Processing Module","Getting Started","Example Usage"],titleterms:{addit:9,align:7,analysi:[2,4],averag:6,cell:5,contact:0,correl:4,data:[5,8,9],depend:[],disc:5,document:1,dynam:[6,9],exampl:9,experi:5,file:[],flyey:2,format:[],get:8,imag:[5,8],input:[],instal:3,load:[8,9],manag:[],measur:9,modul:[4,5,6,7],move:6,nulogo:[],organ:8,overview:8,pipelin:8,prepar:8,process:7,queri:9,requir:[],silhouett:[5,9],spatial:4,spectrogram:4,start:8,structur:[],timeseri:6,triangul:7,usag:9,visual:[6,9]}})