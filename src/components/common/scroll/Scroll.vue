<template>
    <div ref="wrapper">
        <div class="content"> 
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
    name: 'Scroll',
    data(){
        return {
          scroll: null,
        }
    },
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: true,
        }
    },
    mounted() {
        // 1.创建BScroll对象
        this.scroll = new BScroll(this.$refs.wrapper, {
              click: true,
              observeDOM: true,
              probeType: this.probeType,
              pullUpLoad: this.pullUpLoad,
        });

        // 2.监听滚动的位置
        if(this.probeType !=0){
          this.scroll.on('scroll', position => {
            this.$emit('scrollEvent', position);
          });
        }

        // 3.监听下拉
        if(this.pullUpLoad){
            this.scroll.on('pullingUp', ()=>{
              // console.log('-------');
            this.$emit('pullingUp')
          });
        }
    },
    methods: {
      // 回到指定位置
        scrollTo(x,y,time=300){
            this.scroll && this.scroll.scrollTo(x,y,time)
        },
        refresh(){
            this.scroll && this.scroll.refresh();
        },
        // 获取滚动的距离
        getScrollY(){
            return this.scroll ? this.scroll.y : 0;
        },
        //下拉加载更多只能一次，要想多次必须调用 scroll.finishPullUP
        finishPullUp(){
          this.scroll.finishPullUp()
        }
    },
}
</script>

