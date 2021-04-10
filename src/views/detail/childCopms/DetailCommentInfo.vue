<template>
  <div id="detail-comment" v-if="Object.keys(commentInfo).length != 0">
    <div class="comment-title">
      <span class="comment-name">用户评价</span>
      <span class="comment-more">更多</span>
    </div>
    <div class="comment-info">
      <div class="u-info">
        <img :src="commentInfo.user.avatar" alt="" />
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <div class="comment-content">
        <div class="content">{{ commentInfo.content }}</div>
        <p class="content-info">
          {{ commentInfo.created | dateShow }} {{ commentInfo.style }}
        </p>
      </div>
    </div>
    <div class="shop-reply" v-if="commentInfo.explain != null">
      {{ commentInfo.explain }}
    </div>
    <div class="comment-img" v-if="commentInfo.images != null">
      <img
        :src="item"
        alt=""
        v-for="(item, index) in commentInfo.images"
        :key="index"
      />
    </div>
  </div>
</template>
<script>
import {formatDate} from 'common/untils';
export default {
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    dateShow(value) {
      let date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd");
    }
  }
};
</script>
<style scoped>
#detail-comment {
  font-size: 14px;
  padding: 10px 10px;
}
.comment-title {
  padding: 10px 0;
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
  position: relative;
}

.comment-more {
  position: absolute;
  right: -5px;
  top: 2px;
}
.comment-more::after {
  content: "";
  background: url("~assets/images/detail/right_arrow.svg") 0 0/16px 16px;
  display: inline-block;
  position: relative;
  top: 3px;
  width: 16px;
  height: 16px;
}

.u-info {
  padding: 10px 0;
  line-height: 28px;
  display: flex;
}
.u-info img {
  width: 30px;
  border-radius: 50%;
  border: 1px solid rgba(128, 128, 128, 0.3);
}
.u-info span {
  margin-left: 5px;
}

.content {
  line-height: 18px;
  color: #666;
}
.content-info {
  color: #999;
  padding: 5px 0;
}

.shop-reply {
  border-top: 10px solid rgba(128, 128, 128, 0.4);
  padding: 5px 0;
  color: gray;
  line-height: 18px;
}

.comment-img img {
  margin-right: 10px;
  width: auto;
  height: 80px;
}
</style>
