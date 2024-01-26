printf "\033[32mINFO \033[0m 正在安装主题...\n"
npm install hexo-theme-anzhiyu
printf "\033[32mINFO \033[0m 主题安装完成\n"

printf "\033[32mINFO \033[0m 正在安装依赖...\n"
npm install hexo-renderer-pug hexo-renderer-stylus --save
printf "\033[32mINFO \033[0m 依赖安装完成\n"

printf "\033[32mINFO \033[0m 正在停顿10s可供查看情况！无异常可Ctrl+C退出\n"
sleep 10s