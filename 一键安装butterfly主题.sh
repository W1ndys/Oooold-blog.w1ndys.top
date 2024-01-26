printf "\033[32mINFO \033[0m 正在安装butterfly主题...\n"
npm install hexo-theme-butterfly
printf "\033[32mINFO \033[0m 主题安装完成\n"

printf "\033[32mINFO \033[0m 正在安装必备依赖...\n"
npm install hexo-renderer-pug hexo-renderer-stylus --save
printf "\033[32mINFO \033[0m 依赖安装完成\n"


printf "\033[32mINFO \033[0m 正在安装搜索依赖...\n"
npm install hexo-generator-search --save
printf "\033[32mINFO \033[0m 依赖安装完成\n"

printf "\033[32mINFO \033[0m 正在安装字数统计依赖...\n"
npm install hexo-wordcount --save
printf "\033[32mINFO \033[0m 依赖安装完成\n"

printf "\033[32mINFO \033[0m 正在停顿10s可供查看情况！无异常可Ctrl+C退出\n"
sleep 10s