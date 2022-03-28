import ArticleVue from "/src/components/routeComponents/Article.vue"
import ArticlesVue from "/src/components/routeComponents/Articles.vue"
import IndexVue from "/src/components/routeComponents/Index.vue"

export const routes = [
    {path: "/", IndexVue},
    {path: "/articles", ArticlesVue},
    {path: "/articles:articleId", ArticleVue},
]