<template>
    <div class="Home">
        <!-- 开发接入流程 -->
        <h2>开发接入流程</h2>
        <div  class="BlockWrap marginTB_20 PaddingTB_50">
            <Steps :current="4" style="margin-left: 20px">
                <Step title="1.创建产品" content="快速创建APP连接产品" icon="ios-box"></Step>
                <Step title="2.自定义协议" content="自定义APP与产品通讯规则" icon="ios-paper"></Step>
                <Step title="3.调试产品" content="实现APP成功通讯产品" icon="ios-analytics"></Step>
                <Step title="4.发布产品" content="成功发布APP、产品" icon="speakerphone"></Step>
            </Steps>
        </div>
        <!-- 开发指南文件 -->
        <h2>开发指南文件</h2>
        <div  class="BlockWrap marginTB_20">
            <Table border :columns="DownColumns" :data="DownData"></Table>
        </div>
    </div>
</template>
<script>

  export default{
    data: function () {
      return {
        DownColumns: [
            {
                type: 'index',
                width: 60,
                align: 'center'
            },
            // {
            //     title: '文件',
            //     key: 'name',
            //     render: (h, params) => {
            //         return h('img', {
            //             // h('Icon', {
            //                 props: {
            //                     src: 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
            //                 }
            //             // }),
            //         });
            //     }
            // },
            {
                title: '文件',
                key: 'name',
                render: (h, params) => {
                    return h('div', [
                        // h('Icon', {
                        //     props: {
                        //         type: 'folder'
                        //     }
                        // }),
                        h('strong', params.row.name)
                    ]);
                }
            },
            {
                title: '操作',
                key: 'action',
                width: 250,
                align: 'center',
                render: (h, params) => {
                    return h('div', [
                        h('Button', {
                            props: {
                                type: 'primary',
                                icon:'ios-search'
                            },
                            style: {
                                //marginRight: '20px',
                                display:this.DownData[params.index].kind == 'ck'?'':'none'
                            },
                            on: {
                                click: () => {
                                    this.show(params.index)
                                }
                            }
                        }, '查看'),
                        h('Button', {
                            props: {
                                type: 'error',
                                icon:'archive'
                            },
                            style: {
                                //marginRight: '20px',
                                display:this.DownData[params.index].kind == 'xz'?'':'none'
                            },
                            on: {
                                click: () => {
                                    this.remove(params.index)
                                }
                            }
                        }, '下载'),
                        h('Button', {
                            props: {
                                type: 'text',
                                disabled:true
                            },
                            style: {
                                //marginRight: '20px',
                                display:this.DownData[params.index].kind == 'wait'?'':'none'
                            },
                            on: {
                                click: () => {
                                    this.remove(params.index)
                                }
                            }
                        }, '敬请期待')
                    ]);
                }
            }
        ],
        DownData: [
            {
                name: '开发文档浏览',
                kind:'ck'
            },
            {
                name: 'Android SDK下载',
                kind:'xz'
            },
            {
                name: 'iOS SDK下载',
                kind:'xz'
            },
            {
                name: '硬件模拟器',
                kind:'xz'
            },
            {
                name: '硬件SDK下载',
                kind:'wait'
            },
            {
                name: 'Android调试APP',
                kind:'ck'
            },
            {
                name: 'iOS调试APP',
                kind:'ck'
            },
            {
                name: '产测工具',
                kind:'wait'
            }
        ]
      }
    },
    mounted: function () {
      
    },
    created: function () {
      
    },
    computed: {
      
    },
    watch: {
      
    },
    components: {
    },
    methods: {
     

    }
  }
</script>
<style lang="scss" scoped>
.Home{
    margin-top: 50px;
}
</style>
