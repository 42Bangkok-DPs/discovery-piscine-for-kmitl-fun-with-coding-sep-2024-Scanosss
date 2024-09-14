#!/bin/bash

# ตรวจสอบว่าไม่มีอาร์กิวเมนต์ถูกส่งมาหรือไม่
if [ "$#" -eq 0 ]; then
    echo "No arguments supplied"
else
    # ลูปผ่านอาร์กิวเมนต์ทั้งหมดและแสดงผล
    for arg in "$@"; do
        echo "$arg"
    done
fi
