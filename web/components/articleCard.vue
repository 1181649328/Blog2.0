<template>
  <v-container id="cardIndex">
    <v-row>
      <v-col
        :sm="6"
        :md="4"
        :lg="3"
        v-for="item in model"
        :key="item._id"
        id="articleCard"
      >
        <v-hover>
          <template v-slot="{ hover }">
            <v-card
              :elevation="hover ? 2 : 10"
              class="mx-auto"
              max-width="350"
              max-height="380"
              :to="`/article/${item._id}`"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                v-bind:src="item.cover"
              >
                <v-card-title>{{ item.title }}</v-card-title>
              </v-img>

              <v-card-subtitle class="pb-0">article</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>{{ item.Intro }}</div>
              </v-card-text>

              <v-card-actions class="articleMessage">
                <!-- time -->
                <p class="overline">
                  {{ item.createTime.slice(0, 10) }}
                </p>
                <div class="likeAndRead">
                  <!-- read -->
                  <p class="read overline">
                    <v-icon class="articleIcon">mdi-eye-outline</v-icon>
                    {{ item.read }}
                  </p>

                  <!-- comment -->
                  <p class="comment overline">
                    <v-icon class="articleIcon"
                      >mdi-comment-processing-outline</v-icon
                    >
                    {{ item.comment }}
                  </p>
                  <!-- like -->
                  <p class="like overline">
                    <v-icon class="articleIcon">mdi-thumb-up-outline</v-icon>
                    {{ item.like }}
                  </p>
                </div>
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { restGetAll, restGetOne } from "../api/api";
export default {
  async asyncData({ $axios }) {
    const ip = await $axios.$get("http://icanhazip.com");
    console.log(ip);
    return { ip };
  },
  data: () => ({
    overlay: false,
    tagData: {},
    model: [],
  }),
  props: {
    articleId: { type: String },
  },
  methods: {
    async getAllarticle() {
      try {
        let article = await restGetAll("article", { privacy: false });
        this.model = article.data;
        // this.model.forEach(element => {
        //   if (!element.covers) {
        //     return (element.covers = "https://api.ixiaowai.cn/gqapi/gqapi.php"); //没有头像的就给一个随机头像
        //   }
        // });
      } catch (err) {
        console.log(err);
      }
    },
    async getRelatedTagArticle() {
      try {
        console.log(this.articleId);
        let query = { privacy: false, relatedTag: this.articleId };
        let article = await restGetAll("article", query);
        this.model = article.data;
      } catch (error) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.articleId ? this.getRelatedTagArticle() : this.getAllarticle();
  },
};
</script>

<style >
.articleMessage {
  position: relative;
}

.likeAndRead {
  position: absolute;
  right: 10px;
}
.likeAndRead p {
  float: left;
  margin-left: 4px;
}

.articleIcon {
  font-size: 20px;
}
@media screen and (min-width: 1500px) {
  #cardIndex {
    max-width: 1450px;
  }
}
</style>
