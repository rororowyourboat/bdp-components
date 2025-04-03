import{fn as y}from"./index-BgJgh-x_.js";import{r as b,R as r}from"./index-D4lIrffr.js";import{P as K}from"./Processor-bxJtnvL4.js";import{W as Q}from"./Wire-CaNin3E-.js";const H=({processors:L,connections:R,width:s=800,height:i=600,zoom:t=1,gridSize:T=20,showGrid:M=!0,onProcessorClick:g,onWireClick:w})=>{const[V,$]=b.useState(null),[_,z]=b.useState(null),Z=n=>{$(o=>o===n?null:n),g==null||g(n)},j=n=>{z(o=>o===n?null:n),w==null||w(n)},J=()=>{if(!M)return null;const n=[],o=T*t;for(let e=0;e<=s;e+=o)n.push(r.createElement("line",{key:`v-${e}`,x1:e,y1:0,x2:e,y2:i,stroke:"#ddd",strokeWidth:1}));for(let e=0;e<=i;e+=o)n.push(r.createElement("line",{key:`h-${e}`,x1:0,y1:e,x2:s,y2:e,stroke:"#ddd",strokeWidth:1}));return r.createElement("g",{className:"grid"},n)};return r.createElement("div",{className:"bdp-canvas-container",style:{width:s,height:i,overflow:"hidden",border:"1px solid #ccc"}},r.createElement("svg",{width:s,height:i,className:"bdp-canvas"},r.createElement("rect",{x:0,y:0,width:s,height:i,fill:"#f8f8f8"}),J(),R.map(n=>r.createElement(Q,{key:n.id,id:n.id,sourceX:n.sourceX*t,sourceY:n.sourceY*t,targetX:n.targetX*t,targetY:n.targetY*t,type:n.type,label:n.label,showArrow:n.showArrow!==void 0?n.showArrow:!0,animated:n.animated,selected:_===n.id,onWireClick:()=>j(n.id)})),L.map(n=>r.createElement("g",{key:n.id,transform:`translate(${n.x*t}, ${n.y*t}) scale(${t})`},r.createElement(K,{...n.processor,selected:V===n.id,onProcessorClick:()=>Z(n.id)})))))};H.__docgenInfo={description:`BDPCanvas is a more advanced component for displaying and interacting with
a Block Diagram Protocol system, with support for zooming, panning, and grid.`,methods:[],displayName:"BDPCanvas",props:{processors:{required:!0,tsType:{name:"Array",elements:[{name:"ProcessorPosition"}],raw:"ProcessorPosition[]"},description:""},connections:{required:!0,tsType:{name:"Array",elements:[{name:"ConnectionPosition"}],raw:"ConnectionPosition[]"},description:""},width:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"800",computed:!1}},height:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"600",computed:!1}},zoom:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},gridSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}},showGrid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onProcessorClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(processorId: string) => void",signature:{arguments:[{type:{name:"string"},name:"processorId"}],return:{name:"void"}}},description:""},onWireClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(connectionId: string) => void",signature:{arguments:[{type:{name:"string"},name:"connectionId"}],return:{name:"void"}}},description:""}}};const tn={title:"BDP/BDPCanvas",component:H,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{zoom:{control:{type:"range",min:.5,max:2,step:.1}},gridSize:{control:{type:"range",min:10,max:50,step:5}},showGrid:{control:"boolean"},width:{control:{type:"range",min:400,max:1200,step:50}},height:{control:{type:"range",min:300,max:900,step:50}}},args:{zoom:1,gridSize:20,showGrid:!0,width:800,height:600,onProcessorClick:y(),onWireClick:y()}},a={args:{processors:[{id:"proc-1",x:50,y:50,processor:{id:"source",name:"Data Source",description:"Generates data",parent:"source-block",ports:[],terminals:[{id:"t1",name:"Output"}]}},{id:"proc-2",x:300,y:50,processor:{id:"process",name:"Processor",description:"Processes data",parent:"process-block",ports:[{id:"p1",name:"Input"}],terminals:[{id:"t1",name:"Output"}]}},{id:"proc-3",x:550,y:50,processor:{id:"sink",name:"Data Sink",description:"Stores data",parent:"sink-block",ports:[{id:"p1",name:"Input"}],terminals:[]}}],connections:[{id:"conn-1",sourceX:250,sourceY:80,targetX:300,targetY:80,label:"Raw Data",showArrow:!0},{id:"conn-2",sourceX:500,sourceY:80,targetX:550,targetY:80,label:"Processed Data",showArrow:!0}]}},c={args:{processors:[{id:"proc-1",x:50,y:100,processor:{id:"source",name:"Source",parent:"source-block",ports:[],terminals:[{id:"t1",name:"Output"}]}},{id:"proc-2",x:550,y:100,processor:{id:"sink",name:"Sink",parent:"sink-block",ports:[{id:"p1",name:"Input"}],terminals:[]}}],connections:[{id:"conn-1",sourceX:250,sourceY:80,targetX:550,targetY:80,label:"Normal Wire",type:"normal",showArrow:!0},{id:"conn-2",sourceX:250,sourceY:120,targetX:550,targetY:120,label:"Diagnostic Wire",type:"diagnostic",showArrow:!0},{id:"conn-3",sourceX:250,sourceY:160,targetX:550,targetY:160,label:"Control Wire",type:"control",showArrow:!0},{id:"conn-4",sourceX:250,sourceY:200,targetX:550,targetY:200,label:"Animated Wire",type:"normal",showArrow:!0,animated:!0},{id:"conn-5",sourceX:250,sourceY:240,targetX:550,targetY:240,label:"No Arrow",type:"normal",showArrow:!1}],width:800,height:300}},p={args:{processors:[{id:"proc-1",x:50,y:50,processor:{id:"node-a",name:"Node A",parent:"node-block",ports:[{id:"p1",name:"Input"}],terminals:[{id:"t1",name:"Output"}]}},{id:"proc-2",x:550,y:50,processor:{id:"node-b",name:"Node B",parent:"node-block",ports:[{id:"p1",name:"Input"}],terminals:[{id:"t1",name:"Output"}]}}],connections:[{id:"conn-1-forward",sourceX:250,sourceY:75,targetX:550,targetY:75,label:"Request",type:"normal",showArrow:!0},{id:"conn-1-backward",sourceX:550,sourceY:95,targetX:250,targetY:95,label:"Response",type:"normal",showArrow:!0}],width:800,height:200}},d={args:{processors:[{id:"proc-1",x:50,y:50,processor:{id:"input-a",name:"Sensor A",parent:"input-block",ports:[],terminals:[{id:"t1",name:"Data"}]}},{id:"proc-2",x:50,y:200,processor:{id:"input-b",name:"Sensor B",parent:"input-block",ports:[],terminals:[{id:"t1",name:"Data"}]}},{id:"proc-3",x:300,y:50,processor:{id:"filter-a",name:"Filter A",description:"Filters sensor A data",parent:"filter-block",ports:[{id:"p1",name:"Input"}],terminals:[{id:"t1",name:"Output"},{id:"t2",name:"Diagnostics"}]}},{id:"proc-4",x:300,y:200,processor:{id:"filter-b",name:"Filter B",description:"Filters sensor B data",parent:"filter-block",ports:[{id:"p1",name:"Input"}],terminals:[{id:"t1",name:"Output"},{id:"t2",name:"Diagnostics"}]}},{id:"proc-5",x:550,y:125,processor:{id:"aggregator",name:"Data Aggregator",description:"Combines filtered data",parent:"aggregator-block",ports:[{id:"p1",name:"Input A"},{id:"p2",name:"Input B"}],terminals:[{id:"t1",name:"Combined Output"}]}},{id:"proc-6",x:800,y:125,processor:{id:"output",name:"Data Storage",description:"Stores processed data",parent:"output-block",ports:[{id:"p1",name:"Input"}],terminals:[]}},{id:"proc-7",x:550,y:350,processor:{id:"monitor",name:"System Monitor",description:"Monitors system health",parent:"monitor-block",ports:[{id:"p1",name:"Diag A"},{id:"p2",name:"Diag B"}],terminals:[]}}],connections:[{id:"conn-1",sourceX:250,sourceY:80,targetX:300,targetY:80,label:"Sensor A Data",showArrow:!0},{id:"conn-2",sourceX:250,sourceY:230,targetX:300,targetY:230,label:"Sensor B Data",showArrow:!0},{id:"conn-3",sourceX:500,sourceY:80,targetX:550,targetY:140,label:"Filtered A",showArrow:!0},{id:"conn-4",sourceX:500,sourceY:230,targetX:550,targetY:160,label:"Filtered B",showArrow:!0},{id:"conn-5",sourceX:750,sourceY:140,targetX:800,targetY:140,label:"Aggregated Data",showArrow:!0},{id:"conn-6",sourceX:500,sourceY:110,targetX:550,targetY:360,type:"diagnostic",label:"Filter A Diagnostics",showArrow:!0},{id:"conn-7",sourceX:500,sourceY:260,targetX:550,targetY:380,type:"diagnostic",label:"Filter B Diagnostics",showArrow:!0}],width:1e3,height:500}},u={args:{...a.args,zoom:1.5}},l={args:{...a.args,showGrid:!1}},m={args:{processors:[{id:"proc-1",x:50,y:100,processor:{id:"source",name:"Data Source",description:"Real-time data",parent:"source-block",ports:[],terminals:[{id:"t1",name:"High Priority"},{id:"t2",name:"Normal Priority"},{id:"t3",name:"Low Priority"}]}},{id:"proc-2",x:300,y:50,processor:{id:"processor-a",name:"Processor A",description:"High priority",parent:"processor-block",ports:[{id:"p1",name:"Input"}],terminals:[{id:"t1",name:"Output"}]}},{id:"proc-3",x:300,y:150,processor:{id:"processor-b",name:"Processor B",description:"Normal priority",parent:"processor-block",ports:[{id:"p1",name:"Input"}],terminals:[{id:"t1",name:"Output"}]}},{id:"proc-4",x:300,y:250,processor:{id:"processor-c",name:"Processor C",description:"Low priority",parent:"processor-block",ports:[{id:"p1",name:"Input"}],terminals:[{id:"t1",name:"Output"}]}},{id:"proc-5",x:550,y:150,processor:{id:"sink",name:"Data Sink",description:"Aggregated data",parent:"sink-block",ports:[{id:"p1",name:"High"},{id:"p2",name:"Normal"},{id:"p3",name:"Low"}],terminals:[]}}],connections:[{id:"conn-1",sourceX:250,sourceY:70,targetX:300,targetY:60,label:"High Priority",type:"normal",showArrow:!0,animated:!0},{id:"conn-2",sourceX:250,sourceY:100,targetX:300,targetY:160,label:"Normal Priority",type:"normal",showArrow:!0,animated:!0},{id:"conn-3",sourceX:250,sourceY:130,targetX:300,targetY:260,label:"Low Priority",type:"normal",showArrow:!0,animated:!0},{id:"conn-4",sourceX:500,sourceY:60,targetX:550,targetY:130,label:"Processed High",type:"normal",showArrow:!0,animated:!0},{id:"conn-5",sourceX:500,sourceY:160,targetX:550,targetY:150,label:"Processed Normal",type:"normal",showArrow:!0,animated:!0},{id:"conn-6",sourceX:500,sourceY:260,targetX:550,targetY:170,label:"Processed Low",type:"normal",showArrow:!0,animated:!0}],width:800,height:400}};var h,X,Y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    processors: [{
      id: 'proc-1',
      x: 50,
      y: 50,
      processor: {
        id: 'source',
        name: 'Data Source',
        description: 'Generates data',
        parent: 'source-block',
        ports: [],
        terminals: [{
          id: 't1',
          name: 'Output'
        }]
      }
    }, {
      id: 'proc-2',
      x: 300,
      y: 50,
      processor: {
        id: 'process',
        name: 'Processor',
        description: 'Processes data',
        parent: 'process-block',
        ports: [{
          id: 'p1',
          name: 'Input'
        }],
        terminals: [{
          id: 't1',
          name: 'Output'
        }]
      }
    }, {
      id: 'proc-3',
      x: 550,
      y: 50,
      processor: {
        id: 'sink',
        name: 'Data Sink',
        description: 'Stores data',
        parent: 'sink-block',
        ports: [{
          id: 'p1',
          name: 'Input'
        }],
        terminals: []
      }
    }],
    connections: [{
      id: 'conn-1',
      sourceX: 250,
      sourceY: 80,
      targetX: 300,
      targetY: 80,
      label: 'Raw Data',
      showArrow: true
    }, {
      id: 'conn-2',
      sourceX: 500,
      sourceY: 80,
      targetX: 550,
      targetY: 80,
      label: 'Processed Data',
      showArrow: true
    }]
  }
}`,...(Y=(X=a.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var A,k,f;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    processors: [{
      id: 'proc-1',
      x: 50,
      y: 100,
      processor: {
        id: 'source',
        name: 'Source',
        parent: 'source-block',
        ports: [],
        terminals: [{
          id: 't1',
          name: 'Output'
        }]
      }
    }, {
      id: 'proc-2',
      x: 550,
      y: 100,
      processor: {
        id: 'sink',
        name: 'Sink',
        parent: 'sink-block',
        ports: [{
          id: 'p1',
          name: 'Input'
        }],
        terminals: []
      }
    }],
    connections: [
    // Normal wire with arrow
    {
      id: 'conn-1',
      sourceX: 250,
      sourceY: 80,
      targetX: 550,
      targetY: 80,
      label: 'Normal Wire',
      type: 'normal',
      showArrow: true
    },
    // Diagnostic wire with arrow
    {
      id: 'conn-2',
      sourceX: 250,
      sourceY: 120,
      targetX: 550,
      targetY: 120,
      label: 'Diagnostic Wire',
      type: 'diagnostic',
      showArrow: true
    },
    // Control wire with arrow
    {
      id: 'conn-3',
      sourceX: 250,
      sourceY: 160,
      targetX: 550,
      targetY: 160,
      label: 'Control Wire',
      type: 'control',
      showArrow: true
    },
    // Animated wire
    {
      id: 'conn-4',
      sourceX: 250,
      sourceY: 200,
      targetX: 550,
      targetY: 200,
      label: 'Animated Wire',
      type: 'normal',
      showArrow: true,
      animated: true
    },
    // Wire without arrow
    {
      id: 'conn-5',
      sourceX: 250,
      sourceY: 240,
      targetX: 550,
      targetY: 240,
      label: 'No Arrow',
      type: 'normal',
      showArrow: false
    }],
    width: 800,
    height: 300
  }
}`,...(f=(k=c.parameters)==null?void 0:k.docs)==null?void 0:f.source}}};var x,D,P;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    processors: [{
      id: 'proc-1',
      x: 50,
      y: 50,
      processor: {
        id: 'node-a',
        name: 'Node A',
        parent: 'node-block',
        ports: [{
          id: 'p1',
          name: 'Input'
        }],
        terminals: [{
          id: 't1',
          name: 'Output'
        }]
      }
    }, {
      id: 'proc-2',
      x: 550,
      y: 50,
      processor: {
        id: 'node-b',
        name: 'Node B',
        parent: 'node-block',
        ports: [{
          id: 'p1',
          name: 'Input'
        }],
        terminals: [{
          id: 't1',
          name: 'Output'
        }]
      }
    }],
    connections: [
    // Forward direction
    {
      id: 'conn-1-forward',
      sourceX: 250,
      sourceY: 75,
      targetX: 550,
      targetY: 75,
      label: 'Request',
      type: 'normal',
      showArrow: true
    },
    // Backward direction
    {
      id: 'conn-1-backward',
      sourceX: 550,
      sourceY: 95,
      targetX: 250,
      targetY: 95,
      label: 'Response',
      type: 'normal',
      showArrow: true
    }],
    width: 800,
    height: 200
  }
}`,...(P=(D=p.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var S,B,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    processors: [
    // Input layer
    {
      id: 'proc-1',
      x: 50,
      y: 50,
      processor: {
        id: 'input-a',
        name: 'Sensor A',
        parent: 'input-block',
        ports: [],
        terminals: [{
          id: 't1',
          name: 'Data'
        }]
      }
    }, {
      id: 'proc-2',
      x: 50,
      y: 200,
      processor: {
        id: 'input-b',
        name: 'Sensor B',
        parent: 'input-block',
        ports: [],
        terminals: [{
          id: 't1',
          name: 'Data'
        }]
      }
    },
    // Processing layer
    {
      id: 'proc-3',
      x: 300,
      y: 50,
      processor: {
        id: 'filter-a',
        name: 'Filter A',
        description: 'Filters sensor A data',
        parent: 'filter-block',
        ports: [{
          id: 'p1',
          name: 'Input'
        }],
        terminals: [{
          id: 't1',
          name: 'Output'
        }, {
          id: 't2',
          name: 'Diagnostics'
        }]
      }
    }, {
      id: 'proc-4',
      x: 300,
      y: 200,
      processor: {
        id: 'filter-b',
        name: 'Filter B',
        description: 'Filters sensor B data',
        parent: 'filter-block',
        ports: [{
          id: 'p1',
          name: 'Input'
        }],
        terminals: [{
          id: 't1',
          name: 'Output'
        }, {
          id: 't2',
          name: 'Diagnostics'
        }]
      }
    },
    // Aggregation layer
    {
      id: 'proc-5',
      x: 550,
      y: 125,
      processor: {
        id: 'aggregator',
        name: 'Data Aggregator',
        description: 'Combines filtered data',
        parent: 'aggregator-block',
        ports: [{
          id: 'p1',
          name: 'Input A'
        }, {
          id: 'p2',
          name: 'Input B'
        }],
        terminals: [{
          id: 't1',
          name: 'Combined Output'
        }]
      }
    },
    // Output layer
    {
      id: 'proc-6',
      x: 800,
      y: 125,
      processor: {
        id: 'output',
        name: 'Data Storage',
        description: 'Stores processed data',
        parent: 'output-block',
        ports: [{
          id: 'p1',
          name: 'Input'
        }],
        terminals: []
      }
    },
    // Monitoring
    {
      id: 'proc-7',
      x: 550,
      y: 350,
      processor: {
        id: 'monitor',
        name: 'System Monitor',
        description: 'Monitors system health',
        parent: 'monitor-block',
        ports: [{
          id: 'p1',
          name: 'Diag A'
        }, {
          id: 'p2',
          name: 'Diag B'
        }],
        terminals: []
      }
    }],
    connections: [
    // Data flow connections
    {
      id: 'conn-1',
      sourceX: 250,
      sourceY: 80,
      targetX: 300,
      targetY: 80,
      label: 'Sensor A Data',
      showArrow: true
    }, {
      id: 'conn-2',
      sourceX: 250,
      sourceY: 230,
      targetX: 300,
      targetY: 230,
      label: 'Sensor B Data',
      showArrow: true
    }, {
      id: 'conn-3',
      sourceX: 500,
      sourceY: 80,
      targetX: 550,
      targetY: 140,
      label: 'Filtered A',
      showArrow: true
    }, {
      id: 'conn-4',
      sourceX: 500,
      sourceY: 230,
      targetX: 550,
      targetY: 160,
      label: 'Filtered B',
      showArrow: true
    }, {
      id: 'conn-5',
      sourceX: 750,
      sourceY: 140,
      targetX: 800,
      targetY: 140,
      label: 'Aggregated Data',
      showArrow: true
    },
    // Diagnostic connections
    {
      id: 'conn-6',
      sourceX: 500,
      sourceY: 110,
      targetX: 550,
      targetY: 360,
      type: 'diagnostic',
      label: 'Filter A Diagnostics',
      showArrow: true
    }, {
      id: 'conn-7',
      sourceX: 500,
      sourceY: 260,
      targetX: 550,
      targetY: 380,
      type: 'diagnostic',
      label: 'Filter B Diagnostics',
      showArrow: true
    }],
    width: 1000,
    height: 500
  }
}`,...(I=(B=d.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var N,O,v;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    zoom: 1.5
  }
}`,...(v=(O=u.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var F,C,W;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    showGrid: false
  }
}`,...(W=(C=l.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var q,E,G;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    processors: [{
      id: 'proc-1',
      x: 50,
      y: 100,
      processor: {
        id: 'source',
        name: 'Data Source',
        description: 'Real-time data',
        parent: 'source-block',
        ports: [],
        terminals: [{
          id: 't1',
          name: 'High Priority'
        }, {
          id: 't2',
          name: 'Normal Priority'
        }, {
          id: 't3',
          name: 'Low Priority'
        }]
      }
    }, {
      id: 'proc-2',
      x: 300,
      y: 50,
      processor: {
        id: 'processor-a',
        name: 'Processor A',
        description: 'High priority',
        parent: 'processor-block',
        ports: [{
          id: 'p1',
          name: 'Input'
        }],
        terminals: [{
          id: 't1',
          name: 'Output'
        }]
      }
    }, {
      id: 'proc-3',
      x: 300,
      y: 150,
      processor: {
        id: 'processor-b',
        name: 'Processor B',
        description: 'Normal priority',
        parent: 'processor-block',
        ports: [{
          id: 'p1',
          name: 'Input'
        }],
        terminals: [{
          id: 't1',
          name: 'Output'
        }]
      }
    }, {
      id: 'proc-4',
      x: 300,
      y: 250,
      processor: {
        id: 'processor-c',
        name: 'Processor C',
        description: 'Low priority',
        parent: 'processor-block',
        ports: [{
          id: 'p1',
          name: 'Input'
        }],
        terminals: [{
          id: 't1',
          name: 'Output'
        }]
      }
    }, {
      id: 'proc-5',
      x: 550,
      y: 150,
      processor: {
        id: 'sink',
        name: 'Data Sink',
        description: 'Aggregated data',
        parent: 'sink-block',
        ports: [{
          id: 'p1',
          name: 'High'
        }, {
          id: 'p2',
          name: 'Normal'
        }, {
          id: 'p3',
          name: 'Low'
        }],
        terminals: []
      }
    }],
    connections: [
    // Source to processors
    {
      id: 'conn-1',
      sourceX: 250,
      sourceY: 70,
      targetX: 300,
      targetY: 60,
      label: 'High Priority',
      type: 'normal',
      showArrow: true,
      animated: true
    }, {
      id: 'conn-2',
      sourceX: 250,
      sourceY: 100,
      targetX: 300,
      targetY: 160,
      label: 'Normal Priority',
      type: 'normal',
      showArrow: true,
      animated: true
    }, {
      id: 'conn-3',
      sourceX: 250,
      sourceY: 130,
      targetX: 300,
      targetY: 260,
      label: 'Low Priority',
      type: 'normal',
      showArrow: true,
      animated: true
    },
    // Processors to sink
    {
      id: 'conn-4',
      sourceX: 500,
      sourceY: 60,
      targetX: 550,
      targetY: 130,
      label: 'Processed High',
      type: 'normal',
      showArrow: true,
      animated: true
    }, {
      id: 'conn-5',
      sourceX: 500,
      sourceY: 160,
      targetX: 550,
      targetY: 150,
      label: 'Processed Normal',
      type: 'normal',
      showArrow: true,
      animated: true
    }, {
      id: 'conn-6',
      sourceX: 500,
      sourceY: 260,
      targetX: 550,
      targetY: 170,
      label: 'Processed Low',
      type: 'normal',
      showArrow: true,
      animated: true
    }],
    width: 800,
    height: 400
  }
}`,...(G=(E=m.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};const on=["Basic","WireFeatures","BidirectionalWires","ComplexSystem","Zoomed","NoGrid","AnimatedDataFlow"];export{m as AnimatedDataFlow,a as Basic,p as BidirectionalWires,d as ComplexSystem,l as NoGrid,c as WireFeatures,u as Zoomed,on as __namedExportsOrder,tn as default};
