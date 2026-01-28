#!/bin/bash

# 定义镜像名称和容器名称
IMAGE_NAME="chenjianru-portfolio"
CONTAINER_NAME="portfolio-container"
PORT=8080  # 修改为 8080 避免和系统 80 端口冲突

echo "🚀 开始部署流程..."

# 1. 停止并删除旧容器（如果存在）
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
    echo "🛑 停止并删除旧容器..."
    docker stop $CONTAINER_NAME
    docker rm $CONTAINER_NAME
fi

# 2. 删除旧镜像（可选，为了节省空间）
if [ "$(docker images -q $IMAGE_NAME)" ]; then
    echo "🧹 清理旧镜像..."
    docker rmi $IMAGE_NAME
fi

# 3. 构建新镜像
echo "🔨 开始构建 Docker 镜像..."
docker build -t $IMAGE_NAME .

# 4. 运行新容器
echo "🏃‍♂️ 启动新容器..."
docker run -d \
  --name $CONTAINER_NAME \
  --restart unless-stopped \
  -p $PORT:80 \
  $IMAGE_NAME

echo "✅ 部署完成！"
echo "🌐 访问地址: http://localhost:$PORT (或服务器 IP)"
