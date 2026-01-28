#!/bin/bash

# 定义镜像名称和容器名称
IMAGE_NAME="chenjianru-portfolio"
CONTAINER_NAME="portfolio-container"
PORT=8080  # HTTP 端口映射
HTTPS_PORT=443 # HTTPS 端口映射

# ==========================================
# ⚠️⚠️⚠️ 证书路径配置 (请修改这里) ⚠️⚠️⚠️
# 请将下面的路径修改为您服务器上实际的证书文件路径
HOST_CRT_FILE="/etc/ssl/certs/selfsigned.crt"  # 证书文件 (.crt 或 .pem)
HOST_KEY_FILE="/etc/ssl/private/selfsigned.key"  # 私钥文件 (.key)
# ==========================================

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

# 检查证书文件是否存在
if [ ! -f "$HOST_CRT_FILE" ] || [ ! -f "$HOST_KEY_FILE" ]; then
    echo "❌ 错误: 找不到证书文件!"
    echo "   请检查脚本中的 HOST_CRT_FILE 和 HOST_KEY_FILE 变量是否正确。"
    echo "   当前配置路径:"
    echo "   CRT: $HOST_CRT_FILE"
    echo "   KEY: $HOST_KEY_FILE"
    exit 1
fi

# 4. 运行新容器
echo "🏃‍♂️ 启动新容器..."
docker run -d \
  --name $CONTAINER_NAME \
  --restart unless-stopped \
  -p $PORT:80 \
  -p $HTTPS_PORT:443 \
  -v "$HOST_CRT_FILE":/etc/nginx/certs/web.crt \
  -v "$HOST_KEY_FILE":/etc/nginx/certs/web.key \
  $IMAGE_NAME

echo "✅ 部署完成！"
echo "🌐 访问地址: https://chenjianru.me (或服务器 IP)"
echo "   HTTP 地址: http://localhost:$PORT (会自动跳转)"
