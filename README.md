# 产品积木拓展库

本仓库集中发布产品积木拓展包。你可以在图形化编程软件中导入 `.sbext` 或 Mind+ Python `.mpext` 文件，为对应产品添加积木和 Python 代码生成支持。

## 可用产品

| 产品 | 当前版本 | 下载 |
| - | - | - |
| AiDoggy | 0.1.2 | [Releases](https://github.com/heyanjun963/scratch-product-extensions/releases) |
| AI机甲双驱车 | 1.0.0 | [Releases](https://github.com/heyanjun963/scratch-product-extensions/releases) |
| AI机甲麦轮车 | 0.2.3 | [Releases](https://github.com/heyanjun963/scratch-product-extensions/releases) |
| miniHexa | 0.1.1 | [Releases](https://github.com/heyanjun963/scratch-product-extensions/releases) |

本批次列出的 8 个产品包均已上传到 `python-blocks-v1.0.0` Release，并在远程 catalog 中标记为 `published`。

## 下载与安装

1. 打开本仓库的 [Releases](https://github.com/heyanjun963/scratch-product-extensions/releases) 页面。
2. 找到与你的产品匹配的版本。
3. 在 **Assets** 中下载扩展名为 `.sbext` 或 `.mpext` 的文件。
4. 在软件中打开“拓展库”，进入“用户拓展”。
5. 使用本地导入功能选择下载的 `.sbext` 或 `.mpext` 文件。

请勿下载 GitHub 自动生成的 **Source code** 压缩包。该文件只包含仓库源码，不能作为拓展包导入。

## 版本与发布批次

产品版本由各自的 `version` 字段维护，客户端使用它判断更新。一次 Release 可以包含多个产品包，所有包共享产品仓库配置中的 `releaseTag`。当前批次标签为：

```text
python-blocks-v1.0.0
```

例如，`aihexa-1.0.0.mpext` 和 `aimecanum-0.2.3.mpext` 都从上述 Release 下载。升级前请阅读 Release 的更新说明；需要使用旧版本时，可以在 Releases 页面下载历史发布包。

## 校验下载文件

每个发布版本都在 `catalog.json` 中提供 SHA256。下载完成后可以验证文件是否完整。

Windows PowerShell：

```powershell
(Get-FileHash ".\aimecanum-0.2.3.sbext" -Algorithm SHA256).Hash.ToLower()
```

macOS 或 Linux：

```sh
sha256sum ./aimecanum-0.2.3.sbext
```

计算结果应与 `catalog.json` 中对应版本的 `sha256` 完全一致。

## 问题反馈

使用中遇到问题时，请在 [Issues](https://github.com/heyanjun963/scratch-product-extensions/issues) 提交反馈，并提供：

- 产品名称和型号。
- 软件版本。
- 拓展包版本或 Release 标签。
- 问题复现步骤和错误截图。
