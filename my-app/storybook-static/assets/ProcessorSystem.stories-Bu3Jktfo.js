import{r as k,R as r}from"./index-D4lIrffr.js";import{fn as f}from"./index-BgJgh-x_.js";import{P as o}from"./Processor-bxJtnvL4.js";import{W as h}from"./Wire-CaNin3E-.js";const O=({processors:t,connections:M,width:P=800,height:w=600,onProcessorClick:l,onWireClick:m})=>{const[$,G]=k.useState(null),[u,z]=k.useState(null),L=e=>{G(n=>n===e?null:e),l==null||l(e)},g=e=>{z(n=>n===e?null:e),m==null||m(e)};return r.createElement("svg",{width:P,height:w,className:"processor-system"},r.createElement("rect",{x:"0",y:"0",width:P,height:w,fill:"#f8f8f8"}),M.map(e=>e.bidirectional?r.createElement("g",{key:e.id},r.createElement(h,{id:`${e.id}-forward`,sourceX:220,sourceY:145,targetX:300,targetY:145,type:e.type,label:e.label?`${e.label} (forward)`:void 0,showArrow:e.showArrow,animated:e.animated,selected:u===e.id,onWireClick:()=>g(e.id)}),r.createElement(h,{id:`${e.id}-backward`,sourceX:300,sourceY:155,targetX:220,targetY:155,type:e.type,label:e.label?`${e.label} (backward)`:void 0,showArrow:e.showArrow,animated:e.animated,selected:u===e.id,onWireClick:()=>g(e.id)})):r.createElement(h,{key:e.id,id:e.id,sourceX:220,sourceY:150,targetX:300,targetY:150,type:e.type,label:e.label,showArrow:e.showArrow,animated:e.animated,selected:u===e.id,onWireClick:()=>g(e.id)})),t.map((e,n)=>{const b=50+n*150;return r.createElement("g",{key:e.id,transform:`translate(50, ${b})`},r.createElement(o,{...e,selected:$===e.id,onProcessorClick:()=>L(e.id)}))}))};O.__docgenInfo={description:`ProcessorSystem component combines multiple Processors and Wires
to create a visual representation of a BDP system.`,methods:[],displayName:"ProcessorSystem",props:{processors:{required:!0,tsType:{name:"Array",elements:[{name:"ProcessorProps"}],raw:"ProcessorProps[]"},description:""},connections:{required:!0,tsType:{name:"Array",elements:[{name:"Connection"}],raw:"Connection[]"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"800",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"600",computed:!1}},onProcessorClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(processorId: string) => void",signature:{arguments:[{type:{name:"string"},name:"processorId"}],return:{name:"void"}}},description:""},onWireClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(connectionId: string) => void",signature:{arguments:[{type:{name:"string"},name:"connectionId"}],return:{name:"void"}}},description:""}}};const U={title:"BDP/ProcessorSystem",component:O,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{processors:{control:"object"},connections:{control:"object"},width:{control:{type:"number",min:400,max:1200,step:50}},height:{control:{type:"number",min:300,max:900,step:50}}},args:{onProcessorClick:f(),onWireClick:f()}},s={args:{processors:[{id:"processor-1",name:"Data Source",description:"Generates sample data",parent:"source-block",ports:[{id:"p1",name:"Control"}],terminals:[{id:"t1",name:"Output"}]},{id:"processor-2",name:"Data Sink",description:"Receives and stores data",parent:"sink-block",ports:[{id:"p1",name:"Input"}],terminals:[]}],connections:[{id:"conn-1",sourceProcessor:"processor-1",sourceTerminal:"t1",targetProcessor:"processor-2",targetPort:"p1",type:"normal",label:"Data Flow",showArrow:!0}],width:800,height:400}},a={args:{processors:[{id:"processor-1",name:"Data Source",description:"Generates data",parent:"source-block",ports:[{id:"p1",name:"Control"}],terminals:[{id:"t1",name:"Data"},{id:"t2",name:"Diagnostics"},{id:"t3",name:"Control"}]},{id:"processor-2",name:"Data Processor",description:"Processes data",parent:"processor-block",ports:[{id:"p1",name:"Data Input"},{id:"p2",name:"Diagnostics"},{id:"p3",name:"Control"}],terminals:[]}],connections:[{id:"conn-1",sourceProcessor:"processor-1",sourceTerminal:"t1",targetProcessor:"processor-2",targetPort:"p1",type:"normal",label:"Data Flow",showArrow:!0},{id:"conn-2",sourceProcessor:"processor-1",sourceTerminal:"t2",targetProcessor:"processor-2",targetPort:"p2",type:"diagnostic",label:"Diagnostics",showArrow:!0},{id:"conn-3",sourceProcessor:"processor-1",sourceTerminal:"t3",targetProcessor:"processor-2",targetPort:"p3",type:"control",label:"Control Flow",showArrow:!0}],width:800,height:400}},i={args:{processors:[{id:"processor-1",name:"Client",description:"Initiates requests",parent:"client-block",ports:[{id:"p1",name:"Receive"}],terminals:[{id:"t1",name:"Send"}]},{id:"processor-2",name:"Server",description:"Processes requests",parent:"server-block",ports:[{id:"p1",name:"Receive"}],terminals:[{id:"t1",name:"Send"}]}],connections:[{id:"conn-1",sourceProcessor:"processor-1",sourceTerminal:"t1",targetProcessor:"processor-2",targetPort:"p1",type:"normal",label:"Request",showArrow:!0},{id:"conn-2",sourceProcessor:"processor-2",sourceTerminal:"t1",targetProcessor:"processor-1",targetPort:"p1",type:"normal",label:"Response",showArrow:!0}],width:800,height:400}},c={args:{processors:[{id:"processor-1",name:"Node A",description:"Peer Node",parent:"node-block",ports:[{id:"p1",name:"Receive"}],terminals:[{id:"t1",name:"Send"}]},{id:"processor-2",name:"Node B",description:"Peer Node",parent:"node-block",ports:[{id:"p1",name:"Receive"}],terminals:[{id:"t1",name:"Send"}]}],connections:[{id:"conn-1",sourceProcessor:"processor-1",sourceTerminal:"t1",targetProcessor:"processor-2",targetPort:"p1",type:"normal",label:"Peer Communication",bidirectional:!0,showArrow:!0}],width:800,height:400}},p={args:{processors:[{id:"processor-1",name:"Source",description:"Active data source",parent:"source-block",ports:[],terminals:[{id:"t1",name:"Output"}]},{id:"processor-2",name:"Processor",description:"Processing data",parent:"processor-block",ports:[{id:"p1",name:"Input"}],terminals:[{id:"t1",name:"Output"}]},{id:"processor-3",name:"Sink",description:"Receiving data",parent:"sink-block",ports:[{id:"p1",name:"Input"}],terminals:[]}],connections:[{id:"conn-1",sourceProcessor:"processor-1",sourceTerminal:"t1",targetProcessor:"processor-2",targetPort:"p1",type:"normal",label:"Active Feed",showArrow:!0,animated:!0},{id:"conn-2",sourceProcessor:"processor-2",sourceTerminal:"t1",targetProcessor:"processor-3",targetPort:"p1",type:"normal",label:"Processed Data",showArrow:!0,animated:!0}],width:800,height:400}},j=()=>{const t=[{id:"source",name:"Source",description:"Data Generator",parent:"source-block",ports:[],terminals:[{id:"t1",name:"Output"}]},{id:"filter",name:"Filter",description:"Data Filter",parent:"filter-block",ports:[{id:"p1",name:"Input"}],terminals:[{id:"t1",name:"Output"},{id:"t2",name:"Rejected"}]},{id:"transform",name:"Transform",description:"Data Transformer",parent:"transform-block",ports:[{id:"p1",name:"Input"}],terminals:[{id:"t1",name:"Output"}]},{id:"sink",name:"Sink",description:"Data Storage",parent:"sink-block",ports:[{id:"p1",name:"Input"}],terminals:[]},{id:"monitor",name:"Monitor",description:"System Monitor",parent:"monitor-block",ports:[{id:"p1",name:"Input"}],terminals:[]}];return r.createElement("svg",{width:800,height:500},r.createElement("rect",{x:"0",y:"0",width:800,height:500,fill:"#f8f8f8"}),r.createElement("path",{d:"M 220 70 C 260 70, 280 70, 320 70",stroke:"#666",strokeWidth:2,fill:"none",markerEnd:"url(#arrow)"}),r.createElement("path",{d:"M 520 70 C 560 70, 580 70, 620 70",stroke:"#666",strokeWidth:2,fill:"none",markerEnd:"url(#arrow)"}),r.createElement("path",{d:"M 820 70 C 860 70, 880 150, 320 250",stroke:"#666",strokeWidth:2,fill:"none",markerEnd:"url(#arrow)"}),r.createElement("path",{d:"M 520 110 C 550 110, 550 250, 320 350",stroke:"#ff9900",strokeWidth:2,fill:"none",strokeDasharray:"5,5",markerEnd:"url(#diagnostic-arrow)"}),r.createElement("defs",null,r.createElement("marker",{id:"arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto"},r.createElement("path",{d:"M0,0 L0,10 L10,5 z",fill:"#666"})),r.createElement("marker",{id:"diagnostic-arrow",markerWidth:"10",markerHeight:"10",refX:"9",refY:"5",orient:"auto"},r.createElement("path",{d:"M0,0 L0,10 L10,5 z",fill:"#ff9900"}))),r.createElement("g",{transform:"translate(20, 20)"},r.createElement(o,{...t[0],width:200,height:100})),r.createElement("g",{transform:"translate(320, 20)"},r.createElement(o,{...t[1],width:200,height:100})),r.createElement("g",{transform:"translate(620, 20)"},r.createElement(o,{...t[2],width:200,height:100})),r.createElement("g",{transform:"translate(320, 200)"},r.createElement(o,{...t[3],width:200,height:100})),r.createElement("g",{transform:"translate(320, 320)"},r.createElement(o,{...t[4],width:200,height:100})),r.createElement("text",{x:"140",y:"480",fontSize:14,textAnchor:"middle"},"Source → Filter → Transform → Sink"),r.createElement("text",{x:"530",y:"390",fontSize:14,textAnchor:"middle",fill:"#ff9900"},"Diagnostic Flow"))},d={render:()=>r.createElement(j,null)};var y,S,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    processors: [{
      id: 'processor-1',
      name: 'Data Source',
      description: 'Generates sample data',
      parent: 'source-block',
      ports: [{
        id: 'p1',
        name: 'Control'
      }],
      terminals: [{
        id: 't1',
        name: 'Output'
      }]
    }, {
      id: 'processor-2',
      name: 'Data Sink',
      description: 'Receives and stores data',
      parent: 'sink-block',
      ports: [{
        id: 'p1',
        name: 'Input'
      }],
      terminals: []
    }],
    connections: [{
      id: 'conn-1',
      sourceProcessor: 'processor-1',
      sourceTerminal: 't1',
      targetProcessor: 'processor-2',
      targetPort: 'p1',
      type: 'normal',
      label: 'Data Flow',
      showArrow: true
    }],
    width: 800,
    height: 400
  }
}`,...(E=(S=s.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var A,D,C;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    processors: [{
      id: 'processor-1',
      name: 'Data Source',
      description: 'Generates data',
      parent: 'source-block',
      ports: [{
        id: 'p1',
        name: 'Control'
      }],
      terminals: [{
        id: 't1',
        name: 'Data'
      }, {
        id: 't2',
        name: 'Diagnostics'
      }, {
        id: 't3',
        name: 'Control'
      }]
    }, {
      id: 'processor-2',
      name: 'Data Processor',
      description: 'Processes data',
      parent: 'processor-block',
      ports: [{
        id: 'p1',
        name: 'Data Input'
      }, {
        id: 'p2',
        name: 'Diagnostics'
      }, {
        id: 'p3',
        name: 'Control'
      }],
      terminals: []
    }],
    connections: [{
      id: 'conn-1',
      sourceProcessor: 'processor-1',
      sourceTerminal: 't1',
      targetProcessor: 'processor-2',
      targetPort: 'p1',
      type: 'normal',
      label: 'Data Flow',
      showArrow: true
    }, {
      id: 'conn-2',
      sourceProcessor: 'processor-1',
      sourceTerminal: 't2',
      targetProcessor: 'processor-2',
      targetPort: 'p2',
      type: 'diagnostic',
      label: 'Diagnostics',
      showArrow: true
    }, {
      id: 'conn-3',
      sourceProcessor: 'processor-1',
      sourceTerminal: 't3',
      targetProcessor: 'processor-2',
      targetPort: 'p3',
      type: 'control',
      label: 'Control Flow',
      showArrow: true
    }],
    width: 800,
    height: 400
  }
}`,...(C=(D=a.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var v,T,I;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    processors: [{
      id: 'processor-1',
      name: 'Client',
      description: 'Initiates requests',
      parent: 'client-block',
      ports: [{
        id: 'p1',
        name: 'Receive'
      }],
      terminals: [{
        id: 't1',
        name: 'Send'
      }]
    }, {
      id: 'processor-2',
      name: 'Server',
      description: 'Processes requests',
      parent: 'server-block',
      ports: [{
        id: 'p1',
        name: 'Receive'
      }],
      terminals: [{
        id: 't1',
        name: 'Send'
      }]
    }],
    connections: [{
      id: 'conn-1',
      sourceProcessor: 'processor-1',
      sourceTerminal: 't1',
      targetProcessor: 'processor-2',
      targetPort: 'p1',
      type: 'normal',
      label: 'Request',
      showArrow: true
    }, {
      id: 'conn-2',
      sourceProcessor: 'processor-2',
      sourceTerminal: 't1',
      targetProcessor: 'processor-1',
      targetPort: 'p1',
      type: 'normal',
      label: 'Response',
      showArrow: true
    }],
    width: 800,
    height: 400
  }
}`,...(I=(T=i.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var R,x,F;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    processors: [{
      id: 'processor-1',
      name: 'Node A',
      description: 'Peer Node',
      parent: 'node-block',
      ports: [{
        id: 'p1',
        name: 'Receive'
      }],
      terminals: [{
        id: 't1',
        name: 'Send'
      }]
    }, {
      id: 'processor-2',
      name: 'Node B',
      description: 'Peer Node',
      parent: 'node-block',
      ports: [{
        id: 'p1',
        name: 'Receive'
      }],
      terminals: [{
        id: 't1',
        name: 'Send'
      }]
    }],
    connections: [{
      id: 'conn-1',
      sourceProcessor: 'processor-1',
      sourceTerminal: 't1',
      targetProcessor: 'processor-2',
      targetPort: 'p1',
      type: 'normal',
      label: 'Peer Communication',
      bidirectional: true,
      showArrow: true
    }],
    width: 800,
    height: 400
  }
}`,...(F=(x=c.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var Y,W,q;p.parameters={...p.parameters,docs:{...(Y=p.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    processors: [{
      id: 'processor-1',
      name: 'Source',
      description: 'Active data source',
      parent: 'source-block',
      ports: [],
      terminals: [{
        id: 't1',
        name: 'Output'
      }]
    }, {
      id: 'processor-2',
      name: 'Processor',
      description: 'Processing data',
      parent: 'processor-block',
      ports: [{
        id: 'p1',
        name: 'Input'
      }],
      terminals: [{
        id: 't1',
        name: 'Output'
      }]
    }, {
      id: 'processor-3',
      name: 'Sink',
      description: 'Receiving data',
      parent: 'sink-block',
      ports: [{
        id: 'p1',
        name: 'Input'
      }],
      terminals: []
    }],
    connections: [{
      id: 'conn-1',
      sourceProcessor: 'processor-1',
      sourceTerminal: 't1',
      targetProcessor: 'processor-2',
      targetPort: 'p1',
      type: 'normal',
      label: 'Active Feed',
      showArrow: true,
      animated: true
    }, {
      id: 'conn-2',
      sourceProcessor: 'processor-2',
      sourceTerminal: 't1',
      targetProcessor: 'processor-3',
      targetPort: 'p1',
      type: 'normal',
      label: 'Processed Data',
      showArrow: true,
      animated: true
    }],
    width: 800,
    height: 400
  }
}`,...(q=(W=p.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var X,B,N;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <CompleteExample />
}`,...(N=(B=d.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const Z=["Basic","WireTypes","BidirectionalConnections","SingleBidirectionalConnection","AnimatedDataFlow","Complete"];export{p as AnimatedDataFlow,s as Basic,i as BidirectionalConnections,d as Complete,c as SingleBidirectionalConnection,a as WireTypes,Z as __namedExportsOrder,U as default};
