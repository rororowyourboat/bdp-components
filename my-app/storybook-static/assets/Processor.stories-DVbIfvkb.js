import{fn as s}from"./index-BgJgh-x_.js";import{P as C}from"./Processor-bxJtnvL4.js";import"./index-D4lIrffr.js";const S={title:"BDP/Processor",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{id:{control:"text"},name:{control:"text"},description:{control:"text"},parent:{control:"text"},width:{control:{type:"range",min:150,max:500,step:10}},height:{control:{type:"range",min:80,max:300,step:10}},selected:{control:"boolean"},ports:{control:"object"},terminals:{control:"object"},subsystem:{control:"object"}},args:{onPortClick:s(),onTerminalClick:s(),onProcessorClick:s()}},e={args:{id:"proc-001",name:"Basic Processor",description:"A simple processing block",parent:"toolbox-block-001",ports:[{id:"port-001",name:"Input 1"},{id:"port-002",name:"Input 2"}],terminals:[{id:"term-001",name:"Output"}],width:270,height:120,selected:!1}},r={args:{id:"proc-002",name:"Complex Processor",description:"Multiple inputs and outputs",parent:"toolbox-block-002",ports:[{id:"port-001",name:"Data In"},{id:"port-002",name:"Config"},{id:"port-003",name:"Control"},{id:"port-004",name:"Reference"}],terminals:[{id:"term-001",name:"Main Output"},{id:"term-002",name:"Error"},{id:"term-003",name:"Status"}],width:240,height:180,selected:!1}},n={args:{id:"proc-003",name:"Minimal Processor",parent:"toolbox-block-003",ports:[{id:"port-001",name:"In"}],terminals:[{id:"term-001",name:"Out"}],width:180,height:80,selected:!1}},t={args:{...e.args,selected:!0}},o={args:{...r.args,subsystem:{systemId:"sys-001",portMappings:[{portId:"port-001",processorId:"internal-proc-001"},{portId:"port-002",processorId:"internal-proc-002"}],terminalMappings:[{terminalId:"term-001",processorId:"internal-proc-003"}]}}};var a,p,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    id: 'proc-001',
    name: 'Basic Processor',
    description: 'A simple processing block',
    parent: 'toolbox-block-001',
    ports: [{
      id: 'port-001',
      name: 'Input 1'
    }, {
      id: 'port-002',
      name: 'Input 2'
    }],
    terminals: [{
      id: 'term-001',
      name: 'Output'
    }],
    width: 270,
    height: 120,
    selected: false
  }
}`,...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var c,m,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    id: 'proc-002',
    name: 'Complex Processor',
    description: 'Multiple inputs and outputs',
    parent: 'toolbox-block-002',
    ports: [{
      id: 'port-001',
      name: 'Data In'
    }, {
      id: 'port-002',
      name: 'Config'
    }, {
      id: 'port-003',
      name: 'Control'
    }, {
      id: 'port-004',
      name: 'Reference'
    }],
    terminals: [{
      id: 'term-001',
      name: 'Main Output'
    }, {
      id: 'term-002',
      name: 'Error'
    }, {
      id: 'term-003',
      name: 'Status'
    }],
    width: 240,
    height: 180,
    selected: false
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,u,g;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    id: 'proc-003',
    name: 'Minimal Processor',
    parent: 'toolbox-block-003',
    ports: [{
      id: 'port-001',
      name: 'In'
    }],
    terminals: [{
      id: 'term-001',
      name: 'Out'
    }],
    width: 180,
    height: 80,
    selected: false
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,h,I;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Basic.args,
    selected: true
  }
}`,...(I=(h=t.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var x,f,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Complex.args,
    subsystem: {
      systemId: 'sys-001',
      portMappings: [{
        portId: 'port-001',
        processorId: 'internal-proc-001'
      }, {
        portId: 'port-002',
        processorId: 'internal-proc-002'
      }],
      terminalMappings: [{
        terminalId: 'term-001',
        processorId: 'internal-proc-003'
      }]
    }
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const w=["Basic","Complex","Minimal","Selected","WithSubsystem"];export{e as Basic,r as Complex,n as Minimal,t as Selected,o as WithSubsystem,w as __namedExportsOrder,S as default};
