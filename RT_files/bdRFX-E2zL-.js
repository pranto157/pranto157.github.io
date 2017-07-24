if (self.CavalryLogger) { CavalryLogger.start_js(["S+MT9"]); }

__d("ArtilleryCategory",[],(function a(b,c,d,e,f,g){f.exports={UNKNOWN:0,SERVER:1,SERVER_WAIT:2,NETWORK:3,CLIENT:4,CLIENT_WAIT:6,RESOURCE_WAIT:7,NETWORK_WAIT:8,SERVICEWORKER:9,SERVICEWORKER_WAIT:10};}),null);
__d("ArtillerySequenceType",[],(function a(b,c,d,e,f,g){f.exports={SEQUENCE_UNKNOWN:0,SEQUENCE_SERVER:1,SEQUENCE_CLIENT:2};}),null);
__d("ComposerVersion",[],(function a(b,c,d,e,f,g){f.exports={MBASIC_LEGACY:"legacy",MBASIC_AMBER:"amber",MBASIC_LEGACY_SHARE:"legacy_share",MBASIC_AMBER_SHARE:"amber_share",WWW_LEGACY:"www_legacy",WWW_REACT:"www_react",WWW_REACT_WORK:"www_react_work",WWW_REACT_SHARE:"www_react_share",WWW_REACT_SHARER:"www_react_sharer"};}),null);
__d('FBClipboardLink.react',['cx','fbt','Clipboard','DOMContainer.react','Event','React','ReactDOM','SubscriptionsHandler','Tooltip.react','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').PureComponent);k=j&&j.prototype;function m(){var n,o;'use strict';for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=k.constructor).call.apply(n,[this].concat(q)),this.state={copied:false,supported:c('Clipboard').isSupported()},this.$FBClipboardLink1=null,this.$FBClipboardLink2=null,this.$FBClipboardLink4=function(s){if(s.clipboardData){s.clipboardData.setData('text/html',this.props.value);s.preventDefault();}}.bind(this),this.$FBClipboardLink5=function(){if(!this.state.supported)return 'Unsupported in this browser';if(this.state.copied)return this.props.tooltipSuccess;return this.props.tooltip;}.bind(this),this.$FBClipboardLink3=function(){if(this.$FBClipboardLink2){clearTimeout(this.$FBClipboardLink2);this.$FBClipboardLink2=null;}}.bind(this),this.$FBClipboardLink7=function(){this.$FBClipboardLink2=setTimeout(this.$FBClipboardLink8,this.props.tooltipSuccessDuration);}.bind(this),this.$FBClipboardLink6=function(event){var s=c('ReactDOM').findDOMNode(this.refs.root),t=c('Clipboard').copy(this.props.value,s);this.$FBClipboardLink3();this.setState({copied:true,supported:t});this.$FBClipboardLink7();this.props.onComplete&&this.props.onComplete(t);}.bind(this),this.$FBClipboardLink8=function(){this.$FBClipboardLink3();this.setState({copied:false});}.bind(this),o;}m.prototype.componentWillUnmount=function(){'use strict';this.$FBClipboardLink3();if(this.$FBClipboardLink1)this.$FBClipboardLink1.release();};m.prototype.componentDidMount=function(){'use strict';if(this.props.type==='html'){var n=c('ReactDOM').findDOMNode(this);this.$FBClipboardLink1=new (c('SubscriptionsHandler'))();this.$FBClipboardLink1.addSubscriptions(c('Event').listen(n,'copy',this.$FBClipboardLink4));}};m.prototype.render=function(){'use strict';var n=c('joinClasses')(this.props.className,"_xd6"),o=this.props.children||this.props.label;if(!o&&this.props.childrenDONOTUSE)o=c('React').createElement(c('DOMContainer.react'),null,this.props.childrenDONOTUSE);return c('React').createElement(c('Tooltip.react'),babelHelpers['extends']({},this.props,{ref:'root',className:n,tooltip:this.$FBClipboardLink5(),'data-pitloot-persistonclick':true,onClick:this.$FBClipboardLink6,position:this.props.position,alignH:this.props.alignment}),c('React').createElement('div',{ref:'content',className:"_xd7"},o));};m.propTypes={type:l.string,label:l.node,value:l.node.isRequired,tooltip:l.node,tooltipSuccess:l.node,tooltipSuccessDuration:l.number,onComplete:l.func,position:l.oneOf(['above','below','left','right']),alignment:l.oneOf(['left','center','right'])};m.defaultProps={tooltip:i._("Copy Text to Clipboard"),tooltipSuccess:i._("Text Copied to Clipboard"),tooltipSuccessDuration:1000,type:'string'};f.exports=m;}),null);
__d('Button.react',['cx','AbstractButton.react','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m=this.props.use||'default',n=this.props.size||'medium',o="_42fu"+(m==='special'?' '+"_42gz":'')+(m==='confirm'?' '+"_42g-":'')+(n==='large'?' '+"_42gy":'')+(this.props.suppressed?' '+"_42gx":'')+(m!=='default'?' '+"selected":'');return c('React').createElement(c('AbstractButton.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,o)}));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={use:k.oneOf(['special','confirm','default']),size:k.oneOf(['medium','large']),suppressed:k.bool};f.exports=l;}),null);
__d('Date.react',['DateTime','React','formatDate'],(function a(b,c,d,e,f,g){var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;k.prototype.render=function(){'use strict';if(this.props.date instanceof c('DateTime'))return c('React').createElement('span',{className:this.props.className},this.props.date.format(this.props.format,this.props.options));return c('React').createElement('span',{className:this.props.className},c('formatDate')(this.props.date,this.props.format,this.props.options));};function k(){'use strict';h.apply(this,arguments);}k.defaultProps={options:{}};k.propTypes={className:j.string,date:j.oneOfType([j.number,j.instanceOf(Date),j.instanceOf(c('DateTime'))]).isRequired,format:j.oneOfType([j.object,j.string]).isRequired,options:j.object};f.exports=k;}),null);
__d('TextStyles',['ViewStyles'],(function a(b,c,d,e,f,g){'use strict';var h=babelHelpers['extends']({},c('ViewStyles'),{color:true,fontFamily:true,fontSize:true,fontStyle:true,fontWeight:true,letterSpacing:true,lineHeight:true,textAlign:true,textDecorationLine:true,whiteSpace:true});f.exports=h;}),null);
__d('Text',['cx','React','TextStyles','getValidatedStyle'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.getChildContext=function(){return {inline:true};};l.prototype.render=function(){var m=this.props,n=m.children,o=m.style,p=m.onPress,q=c('getValidatedStyle')(o,c('TextStyles')),r=typeof n==='string',s=this.context.inline,t="_b5a"+(!r&&!s?' '+"_b5b":'')+(!!s?' '+"_b5c":''),u=void 0;if(r){u=n;}else u=c('React').Children.map(n,function(v){return typeof v==='string'?c('React').createElement(l,null,v):v;});return c('React').createElement('div',{className:t,onClick:p,role:'presentation',style:q},u);};function l(){i.apply(this,arguments);}l.childContextTypes={inline:k.bool};l.contextTypes={inline:k.bool};f.exports=l;}),null);
__d('DialogFitHeightToContent',['AbstractDialogFitHeight'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('AbstractDialogFitHeight'));i=h&&h.prototype;j.prototype.getHeightProperty=function(){'use strict';return 'max-height';};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('matchRoute',[],(function a(b,c,d,e,f,g){'use strict';function h(i,j){return j[i.name]?j[i.name]():null;}f.exports=h;}),null);
__d("XCMSBlockDeliveryController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/cms\/render_block\/",{});}),null);