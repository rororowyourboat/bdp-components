import{R as e}from"./index-D4lIrffr.js";import{fn as V}from"./index-BgJgh-x_.js";import{W as r}from"./Wire-CaNin3E-.js";const re={title:"BDP/Wire",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},sourceX:{control:{type:"number",min:0,max:500}},sourceY:{control:{type:"number",min:0,max:500}},targetX:{control:{type:"number",min:0,max:500}},targetY:{control:{type:"number",min:0,max:500}},type:{control:"select",options:["normal","diagnostic","control"]},selected:{control:"boolean"},animated:{control:"boolean"},label:{control:"text"},showArrow:{control:"boolean"},reversed:{control:"boolean"}},args:{onWireClick:V(),showArrow:!0},decorators:[U=>e.createElement("svg",{width:"600",height:"300"},e.createElement("rect",{x:"0",y:"0",width:"600",height:"300",fill:"#f8f8f8"}),e.createElement(U,null))]},a={args:{id:"wire-001",sourceX:100,sourceY:150,targetX:500,targetY:150,type:"normal",selected:!1,animated:!1}},t={args:{...a.args,id:"wire-label",label:"Data Connection"}},o={args:{...a.args,id:"wire-selected",selected:!0}},n={args:{...a.args,id:"wire-diagnostic",type:"diagnostic",label:"Diagnostic Flow"}},s={args:{...a.args,id:"wire-control",type:"control",label:"Control Signal"}},c={args:{...a.args,id:"wire-animated",animated:!0,label:"Animated Data Flow"}},i={args:{id:"wire-curved",sourceX:100,sourceY:100,targetX:500,targetY:200,type:"normal",label:"Curved Connection"}},l={args:{...a.args,id:"wire-no-arrow",showArrow:!1,label:"No Direction Indicator"}},d={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{id:"wire-forward",sourceX:100,sourceY:150,targetX:500,targetY:150,type:"normal",label:"Forward"}),e.createElement(r,{id:"wire-backward",sourceX:500,sourceY:190,targetX:100,targetY:190,type:"normal",label:"Backward",reversed:!0}))},g={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{id:"wire-normal",sourceX:50,sourceY:50,targetX:550,targetY:50,type:"normal",label:"Data"}),e.createElement(r,{id:"wire-diag",sourceX:50,sourceY:150,targetX:550,targetY:150,type:"diagnostic",label:"Diagnostics"}),e.createElement(r,{id:"wire-control",sourceX:50,sourceY:250,targetX:550,targetY:250,type:"control",label:"Control"}))},m={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{id:"normal-dir",sourceX:50,sourceY:75,targetX:550,targetY:75,type:"normal",label:"Normal Flow"}),e.createElement(r,{id:"diag-dir",sourceX:50,sourceY:150,targetX:550,targetY:150,type:"diagnostic",label:"Diagnostic Flow"}),e.createElement(r,{id:"control-dir",sourceX:50,sourceY:225,targetX:550,targetY:225,type:"control",label:"Control Flow"}))},u={render:()=>e.createElement(e.Fragment,null,e.createElement(r,{id:"forward-arrow",sourceX:100,sourceY:100,targetX:500,targetY:100,type:"normal",label:"Standard (Forward) Arrow"}),e.createElement(r,{id:"backward-arrow",sourceX:500,sourceY:180,targetX:100,targetY:180,type:"normal",label:"Standard Backward (Wrong Direction)"}),e.createElement(r,{id:"reversed-arrow",sourceX:500,sourceY:260,targetX:100,targetY:260,type:"normal",label:"Reversed Arrow (Correct Direction)",reversed:!0}))};var p,w,X;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'wire-001',
    sourceX: 100,
    sourceY: 150,
    targetX: 500,
    targetY: 150,
    type: 'normal',
    selected: false,
    animated: false
  }
}`,...(X=(w=a.parameters)==null?void 0:w.docs)==null?void 0:X.source}}};var Y,b,y;t.parameters={...t.parameters,docs:{...(Y=t.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    id: 'wire-label',
    label: 'Data Connection'
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var D,W,f;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    id: 'wire-selected',
    selected: true
  }
}`,...(f=(W=o.parameters)==null?void 0:W.docs)==null?void 0:f.source}}};var S,C,E;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    id: 'wire-diagnostic',
    type: 'diagnostic',
    label: 'Diagnostic Flow'
  }
}`,...(E=(C=n.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var F,v,A;s.parameters={...s.parameters,docs:{...(F=s.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    id: 'wire-control',
    type: 'control',
    label: 'Control Signal'
  }
}`,...(A=(v=s.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var B,h,k;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    id: 'wire-animated',
    animated: true,
    label: 'Animated Data Flow'
  }
}`,...(k=(h=c.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var x,I,N;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    id: 'wire-curved',
    sourceX: 100,
    sourceY: 100,
    targetX: 500,
    targetY: 200,
    type: 'normal',
    label: 'Curved Connection'
  }
}`,...(N=(I=i.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var R,L,M;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    id: 'wire-no-arrow',
    showArrow: false,
    label: 'No Direction Indicator'
  }
}`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var _,O,P;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <>
      <Wire id="wire-forward" sourceX={100} sourceY={150} targetX={500} targetY={150} type="normal" label="Forward" />
      <Wire id="wire-backward" sourceX={500} sourceY={190} targetX={100} targetY={190} type="normal" label="Backward" reversed={true} />
    </>
}`,...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var T,j,q;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <>
      <Wire id="wire-normal" sourceX={50} sourceY={50} targetX={550} targetY={50} type="normal" label="Data" />
      <Wire id="wire-diag" sourceX={50} sourceY={150} targetX={550} targetY={150} type="diagnostic" label="Diagnostics" />
      <Wire id="wire-control" sourceX={50} sourceY={250} targetX={550} targetY={250} type="control" label="Control" />
    </>
}`,...(q=(j=g.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var z,G,H;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <>
      <Wire id="normal-dir" sourceX={50} sourceY={75} targetX={550} targetY={75} type="normal" label="Normal Flow" />
      <Wire id="diag-dir" sourceX={50} sourceY={150} targetX={550} targetY={150} type="diagnostic" label="Diagnostic Flow" />
      <Wire id="control-dir" sourceX={50} sourceY={225} targetX={550} targetY={225} type="control" label="Control Flow" />
    </>
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <>
      <Wire id="forward-arrow" sourceX={100} sourceY={100} targetX={500} targetY={100} type="normal" label="Standard (Forward) Arrow" />
      <Wire id="backward-arrow" sourceX={500} sourceY={180} targetX={100} targetY={180} type="normal" label="Standard Backward (Wrong Direction)" />
      <Wire id="reversed-arrow" sourceX={500} sourceY={260} targetX={100} targetY={260} type="normal" label="Reversed Arrow (Correct Direction)" reversed={true} />
    </>
}`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const ae=["Basic","WithLabel","Selected","Diagnostic","Control","Animated","Curved","WithoutArrow","Bidirectional","MultipleWires","DirectionIndicators","ArrowDirection"];export{c as Animated,u as ArrowDirection,a as Basic,d as Bidirectional,s as Control,i as Curved,n as Diagnostic,m as DirectionIndicators,g as MultipleWires,o as Selected,t as WithLabel,l as WithoutArrow,ae as __namedExportsOrder,re as default};
