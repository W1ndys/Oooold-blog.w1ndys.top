printf "\033[32mINFO \033[0m 正在初始化,请坐和放宽...\n"
mkdir Hexo
cd Hexo
npm config set registry https://registry.npmmirror.com
printf "\033[32mINFO \033[0m 将进行git-clone操作\n"
printf "\033[32mINFO \033[0m 如果连接失败请确认你是否可以克隆GitHub仓库\n"
npm install -g hexo-cli
hexo init
npm install --save
npm install hexo-deployer-git --save
printf "\033[32mINFO \033[0m 请查看您当前的Hexo版本...\n"
hexo version
printf "\033[32mINFO \033[0m 安装完成，您可以开始您的Hexo之旅了！\n"

printf "\033[32mINFO \033[0m \033[33m执行静止20s操作，确认无误可Ctrl+C退出！\n"
sleep 20s