import type { IServiceContext } from './types/ServiceClass';
import { proxify, proxifyWithWait } from './lib/proxify';
import type { IAuthorization } from './types/IAuthorization';
import type { IPresence } from './types/IPresence';
import type { IAccount } from './types/IAccount';
import type { ILicense } from './types/ILicense';
import type { IMeteor } from './types/IMeteor';
import type { IUiKitCoreAppService } from './types/IUiKitCoreApp';
import type { IEnterpriseSettings } from './types/IEnterpriseSettings';
import type { IBannerService } from './types/IBannerService';
import type { INPSService } from './types/INPSService';
import type { ITeamService } from './types/ITeamService';
import type { IRoomService } from './types/IRoomService';
import type { IMediaService } from './types/IMediaService';
import type { IVoipService } from './types/IVoipService';
import type { IOmnichannelVoipService } from './types/IOmnichannelVoipService';
import type { IAnalyticsService } from './types/IAnalyticsService';
import type { ILDAPService } from './types/ILDAPService';
import type { IVideoConfService } from './types/IVideoConfService';
import type { ISAUMonitorService } from './types/ISAUMonitorService';
import type { IDeviceManagementService } from './types/IDeviceManagementService';
import type { IAppsService } from './types/IAppsService';
import { FibersContextStore } from './lib/ContextStore';
import type { IAppsStatisticsService } from './types/IAppsStatisticsService';
import type { IAppsConverterService } from './types/IAppsConverterService';
import type { IAppsManagerService } from './types/IAppsManagerService';
import type { IAppsListenerService } from './types/IAppsListenerService';
import type { IAppsVideoManagerService } from './types/IAppsVideoManagerService';
import type { IUploadService } from './types/IUploadService';
import type { ICloudService } from './types/ICloudService';
import type { IUserService } from './types/IUserService';
import type { IFetchService } from './types/IFetchService';
import type { ILivechatService } from './types/ILivechatService';
import type { IMessageService } from './types/IMessageService';
import type { INotificationService } from './types/INotificationService';
import type { ISlashCommandService } from './types/ISlashCommandService';
import type { IAppsApiService } from './types/IAppsApiService';

// TODO think in a way to not have to pass the service name to proxify here as well
export const Authorization = proxifyWithWait<IAuthorization>('authorization');
export const Presence = proxifyWithWait<IPresence>('presence');
export const Account = proxifyWithWait<IAccount>('accounts');
export const License = proxifyWithWait<ILicense>('license');
export const MeteorService = proxifyWithWait<IMeteor>('meteor');
export const Banner = proxifyWithWait<IBannerService>('banner');
export const UiKitCoreApp = proxifyWithWait<IUiKitCoreAppService>('uikit-core-app');
export const NPS = proxifyWithWait<INPSService>('nps');
export const Team = proxifyWithWait<ITeamService>('team');
export const Room = proxifyWithWait<IRoomService>('room');
export const Upload = proxifyWithWait<IUploadService>('upload');
export const User = proxifyWithWait<IUserService>('user');
export const Cloud = proxifyWithWait<ICloudService>('cloud');
export const Media = proxifyWithWait<IMediaService>('media');
export const Voip = proxifyWithWait<IVoipService>('voip');
export const LivechatVoip = proxifyWithWait<IOmnichannelVoipService>('omnichannel-voip');
export const Analytics = proxifyWithWait<IAnalyticsService>('analytics');
export const LDAP = proxifyWithWait<ILDAPService>('ldap');
export const SAUMonitor = proxifyWithWait<ISAUMonitorService>('sau-monitor');
export const DeviceManagement = proxifyWithWait<IDeviceManagementService>('device-management');
export const VideoConf = proxifyWithWait<IVideoConfService>('video-conference');
export const Apps = proxifyWithWait<IAppsService>('apps');
export const AppsStatistics = proxifyWithWait<IAppsStatisticsService>('apps');
export const AppsConverter = proxifyWithWait<IAppsConverterService>('apps');
export const AppsManager = proxifyWithWait<IAppsManagerService>('apps');
export const AppsListener = proxifyWithWait<IAppsListenerService>('apps');
export const AppsVideoManager = proxifyWithWait<IAppsVideoManagerService>('apps');
export const AppsApiService = proxifyWithWait<IAppsApiService>('apps');
export const FetchService = proxifyWithWait<IFetchService>('fetch');
export const LivechatService = proxifyWithWait<ILivechatService>('livechat');
export const MessageService = proxifyWithWait<IMessageService>('message');
export const NotificationService = proxifyWithWait<INotificationService>('notification');
export const SlashCommandService = proxifyWithWait<ISlashCommandService>('slashcommand');

// Calls without wait. Means that the service is optional and the result may be an error
// of service/method not available
export const EnterpriseSettings = proxify<IEnterpriseSettings>('ee-settings');

// TODO Evalute again using AsyncContextStore instead of FibersContextStore in a future Meteor release (after 2.5)
export const asyncLocalStorage = new FibersContextStore<IServiceContext>();