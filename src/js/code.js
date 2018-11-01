let code = `
/* 首先，需要皮卡丘的皮 */
.preview{height: 100%;display: flex;justify-content: center;align-items: center;background: #fee433;overflow:hidden}
.wrapper{width:100%;height:165px;position:relative;}

/* 接下来，画皮卡丘的鼻子 */
.nose{width:0;height:0;border-style:solid;border-width:12px;border-color:black transparent transparent;border-radius:50%;position:absolute;left:50%;top:28px;margin-left:-12px;}

/* 接下来，画皮卡丘的眼睛 */
.eye{width:49px;height:49px;border-radius:50%;background:#2e2e2e;position:absolute;top:0;border:2px solid #000000;}

/* 接下来，画皮卡丘的眼珠子 */
.eye::before{content:'';display:block;width:24px;height:24px;border-radius:50%;background:white;position:absolute;left:6px;top:-1px;border:2px solid #000;}

/* 接下来，左眼在左边 */
.eye.left{right:50%;margin-right:90px;}

/* 接下来，右眼在右边 */
.eye.right{left:50%;margin-left:90px;}

/* 接下来，画皮卡丘的脸颊 */
.face{width:68px;height:68px;background:#fc0d1c;border:2px solid black;border-radius:50%;position:absolute;top:85px;}

/* 接下来，左脸颊在左边 */
.face.left{right:50%;margin-right:116px;}

/* 接下来，右脸颊在右边 */
.face.right{left:50%;margin-left:116px;}

/* 接下来，画皮卡丘的上嘴唇 */
.upperLip{height:25px;width:80px;border:3px solid black;position:absolute;top:50px;background:#fde348;;}
.upperLip.left{right:50%;border-bottom-left-radius:40px 25px;border-top:none;border-right:none;transform:rotate(-20deg);}
.upperLip.right{left:50%;border-bottom-right-radius:40px 25px;border-top:none;border-left:none;transform:rotate(20deg);}

/* 接下来，画皮卡丘的下嘴唇 */
.lowerLip_wripper{position:absolute;bottom:0;left:50%;margin-left:-150px;height:110px;width:300px;overflow:hidden;}
.lowerLip{width:300px;height:3500px;background:#990513;border-radius:200px/2000px;border:2px solid black;position:absolute;bottom:0;overflow:hidden;}

/* 接下来，画皮卡丘的舌头 */
.lowerLip::after{content:'';position:absolute;bottom:-20px;width:100px;height:100px;background:#fc4a62;left:50%;margin-left:-50px;border-radius:50%;z-index:1}

/* 好了，结束了，谢谢观看 */
    `

    export default code