---
sidebar_position: 1
---

# 免费加速下载 Github 资源 TurboHub

TurboHub 是一个免费的 Github 资源加速下载站点，可以帮助你快速下载 Github 上的资源。其核心逻辑是通过 Azure Static Web Apps 服务和 Azure Functions 服务，将 Github 上的资源通过中间服务器进行转发，从而实现加速下载的目的。

由于每个使用 Azure 的用户都可以免费的额度部署 Azure Static Web Apps 服务和 Azure Functions 服务，因此你现在也可以免费的部署一个属于自己的 TurboHub 服务，从而实现免费加速下载 Github 资源。

## 开始部署

接下来，我们从零开始，一步一步的部署一个属于自己的 TurboHub 服务。

### 注册 Azure 账号

你需要注册一个 Azure 账号，如果你已经有了 Azure 账号，可以跳过这一步，直接进入[部署 TurboHub](#部署-turbohub)。

如果您还没有任何账号，那么接下来，跟随下面的步骤注册一个 Azure 账号。

**重要提示：以下操作建议在一个隐身模式的浏览器中操作，避免您本地有多个账号可能出现冲突。例如在 Chrome 系列浏览器中可以使用 `Ctrl + Shift + N` 快捷键打开隐身模式。**

首先, 我们建议您注册一个邮箱，这边推荐使用 outlook 邮箱，您可以在以下链接中注册一个 outlook 邮箱。

[点击此处跳转到 outlook 邮箱注册页面 https://outlook.live.com/owa/?nlp=1&signup=1&WT.mc_id=DT-MVP-5004283](https://outlook.live.com/owa/?nlp=1&signup=1&WT.mc_id=DT-MVP-5004283)

由于注册邮箱的步骤非常简单，这里就不再赘述了。接下来，我们需要注册一个 Azure 账号，您可以在以下链接中注册一个 Azure 账号。

[点击此处跳转到 Azure 注册页面 https://azure.microsoft.com/offers/ms-azr-0003p/?WT.mc_id=DT-MVP-5004283](https://azure.microsoft.com/offers/ms-azr-0003p/?WT.mc_id=DT-MVP-5004283)

然后就会跳转到 Azure 注册页面，点击 `立即购买` 按钮。

![点击立即购买](/img/turbohub/20230812001_click_register.png)

然后便可以使用刚刚注册的 outlook 邮箱进行登录。过程中可能会要求进行验证，按照提示进行验证即可。

接下来，正常情况下会进入个人信息填写页面。此处有一个非常重要的内容。

**在填写国家或地区时，请不要选择`中国`和`印度`,这将导致您无法获得基础免费额度之外，Azure 提供的额外 12 个月的免费额度。**

**或者换句话说，我们建议您选择`中国香港`。**

**手机验证可以选中国，没问题。**

![填写个人信息](/img/turbohub/20230812002_fill_personal_info.png)

![验证电话](/img/turbohub/20230812003_phone_validation.png)

点击下一步后，您将进入到信用卡验证。输入您支持`Visa`或`MasterCard`的信用卡信息，点击下一步。

![信用卡验证](/img/turbohub/20230812004_card_validation.png)

![无需支持](/img/turbohub/20230812005_no_support.png)

最后点击`注册`按钮，即可完成注册。

### 部署 TurboHub

#### 创建 Azure Static Web Apps 服务

首先，我们需要创建一个资源组，用于对 Azure 资源进行管理。点击 Azure 门户左上角的`创建资源`按钮。

![创建资源](/img/turbohub/20230812006_create_resource_pool.png)

![创建资源池](/img/turbohub/20230812007_create_resource_group.png)

创建资源池时，需要注意以下几点：

1. 资源池名称必须是全局唯一的，如果提示名称已经存在，请换一个名称。
2. 地区推荐选择`东亚/香港`。

创建好资源池后，我们可以再次创建资源，这次我们创建一个 Azure Static Web Apps 服务。

![创建StaticWebSite](/img/turbohub/20230812008_create_static_web_app.png)

![创建StaticWebSite详细参数](/img/turbohub/20230812009_create_static_web_app_details.png)

创建 Azure Static Web Apps 服务时，需要注意以下几点：

1. 资源池选择前一步创建的资源池。
2. 选择免费计划。
3. 部署源选择其他。

创建好之后，便可以在之前的资源池看到对应的 Azure Static Web Apps 服务。

![查看创建结果](/img/turbohub/20230812010_view_static_web_site.png)

接下来，我们可以点击 Azure Static Web Apps 服务，进入到 Azure Static Web Apps 服务的管理页面。

**在管理界面上，我们可以获取到 Azure Static Web Apps 服务的部署令牌，这个令牌将用于后续部署 TurboHub 代码。**

![复制deploymentToken](/img/turbohub/20230812011_copy_deploy_token.png)

#### 部署 TurboHub 代码

接下来，我们需要将 TurboHub 代码部署到 Azure Static Web Apps 服务中。

[打开 TurboHub 代码仓库，点击右上角的`Fork`按钮，将代码仓库 Fork 到自己的账号下。 https://github.com/RushGet/TurboHub](https://github.com/RushGet/TurboHub)

![ForkRepo](/img/turbohub/20230812012_fork_repo.png)

##### 添加 deploymentToken

在设置界面，我们可以添加刚刚前面生成的 deploymentToken。

其中，`AZURE_STATIC_WEB_APPS_API_TOKEN`的值就是刚刚前面生成的 deploymentToken。

![changeVisibility](/img/turbohub/20230812015_update_deploytoken.png)

##### 首次部署

在仓库设置完成后，我们可以点击`Actions`按钮，进入到 GitHub Actions 界面。手动触发一次`Deploy Azure Static Web Apps`的工作流。

![deploy](/img/turbohub/20230812016_deploy.png)

等待运行完毕后，我们可以在 Azure Static Web Apps 服务的管理界面中，看到部署的结果。

![browser](/img/turbohub/20230812017_browser_web_site.png)

这样，我们就完成了 TurboHub 的部署。

## 使用方法

部署完毕之后，我们可以访问 TurboHub。

界面非常简单，可以通过输入框输入希望下载的文件地址，然后点击`加速下载`按钮，即可开始下载。

![turbohubweb](/img/turbohub/20230812018_web.png)

## FAQ

### 我能够免费下载多少文件？

Azure Static Web Apps 服务提供的免费额度为 100GB/月，如果您的下载量超过 100GB/月，站点将停止，下个月才会恢复。

其中 Azure Functions 的免费额度为 1M 次/月，如果您的下载量超过 1M 次/月，站点将停止，下个月才会恢复。

详细情况您可以参看 [Azure Static Web Apps 的定价](https://azure.microsoft.com/pricing/details/app-service/static/?WT.mc_id=DT-MVP-5004283#overview)，以及 [Azure Functions 的定价](https://azure.microsoft.com/pricing/details/functions/?WT.mc_id=DT-MVP-5004283#pricing)。

### 我担心我部署的 TurboHub 会被其他人使用，导致我的免费额度被消耗完毕，我该怎么办？

第一个办法是，您可以在仓库设置中将仓库设置为私有，这样其他人就无法看到您的仓库了，以及地址。并且，TurboHub 默认是不允许搜索引擎爬取的，所以您的仓库地址不会被搜索引擎爬取到。

这样您就可以在自己的账号下看到 TurboHub 代码仓库了。默认情况下，您的代码仓库是公开的，您部署的 TurboHub 地址会被其他人看到。如果您希望保密，可以在仓库设置中将仓库设置为私有。

您可以通过以下链接进入到仓库设置页面，修改仓库的可见性。

![settingsPage](/img/turbohub/20230812013_settings.png)

![changeVisibility](/img/turbohub/20230812014_change_visibllity.png)

第二个办法是，您可以每次使用完之后，都从 Azure Static Web Apps 服务中停止 Production 环境，这样您的 TurboHub 就无法使用了。

第三个办法是，未来我们将会为 TurboHub 提供身份认证功能，您可以在仓库设置中，设置只有您的账号才能够使用 TurboHub。

### 我遇到了问题，我该怎么办？

您可以在 TurboHub 的 GitHub 仓库中，提交 Issue，我们会尽快回复您。

[https://github.com/RushGet/TurboHub/issues](https://github.com/RushGet/TurboHub/issues)