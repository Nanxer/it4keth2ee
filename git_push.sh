#!/bin/bash
set -euo pipefail

# 定义目录路径
SOURCE_DIR="./docs/.vuepress/dist/"
DEST_DIR="../github/it4keth2ee/"

# 检查源目录是否存在
if [ ! -d "$SOURCE_DIR" ]; then
    echo "错误：源目录 $SOURCE_DIR 不存在！"
    exit 1
fi

# 检查目标目录是否存在
if [ ! -d "$DEST_DIR" ]; then
    echo "错误：目标目录 $DEST_DIR 不存在！"
    exit 1
fi

echo "开始部署网站文件..."

# 移动CNAME文件
if [ -f "../github/it4keth2ee/CNAME" ]; then
    echo "移动CNAME文件到public目录..."
    mv ../github/it4keth2ee/CNAME "$SOURCE_DIR/" || {
        echo "移动CNAME文件失败！"
        exit 1
    }
else
    echo "CNAME文件不存在，跳过移动步骤"
fi

# 清空目标目录
echo "清空目标目录 $DEST_DIR ..."
rm -rf "$DEST_DIR"/* || {
    echo "清空目标目录失败！"
    exit 1
}

# 复制文件到目标目录
echo "复制文件到目标目录 $DEST_DIR ..."
cp -r "$SOURCE_DIR"/* "$DEST_DIR/" || {
    echo "复制文件失败！"
    exit 1
}

# 提交并推送更改
echo "提交并推送更改..."
cd "$DEST_DIR" || {
    echo "无法进入目录 $DEST_DIR！"
    exit 1
}

# 检查是否有需要提交的更改
if git status --porcelain | grep -q .; then
    git add .
    git commit -m "自动部署更新: $(date +'%Y-%m-%d %H:%M:%S')"
    git push origin main || {
        echo "推送更改到远程仓库失败！"
        exit 1
    }
    echo "部署完成！"
else
    echo "没有检测到需要更新的内容，无需提交。"
fi