#!/bin/bash

echo "🔄 拉取最新代码..."
git pull

echo "📦 配置 Docker 镜像加速..."
# 检查 daemon.json 是否存在，如果不存在则创建
if [ ! -f /etc/docker/daemon.json ]; then
    sudo mkdir -p /etc/docker
    sudo cp daemon.json /etc/docker/daemon.json
    echo "✅ 镜像加速配置已复制"
    echo "🔄 重启 Docker 服务..."
    sudo systemctl daemon-reload
    sudo systemctl restart docker
else
    echo "⚠️ /etc/docker/daemon.json 已存在，跳过覆盖。请手动检查配置。"
fi

echo "🚀 重新运行部署脚本..."
chmod +x deploy.sh
./deploy.sh
