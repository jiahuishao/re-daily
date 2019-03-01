### 已解决问题:
    启用webpack-dev-server本地服务时,
    虽然iframe中的页面成功应用css样式文件,但是在控制台中会报错

> 报错信息 <br>
> `Refused to apply style from 'http://localhost:8080/CSS/globel.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.`

> 备注：现阶段并未发现对项目有巨大影响，所有css样式文件皆引用成功。

> <strong>问题原因：忘记将页面head中的link删除，使用错误路径引用导致报错</strong>

### 未解决问题:

