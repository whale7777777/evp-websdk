import { State } from '@core/state';
import { Player, PlayerOption, PlaylistItem } from 'mudu-player';
import { PlaybackConfig, AdvertisementConfig } from '@type/basis.type';
import { PageWatchEventActions } from '@type/analytic.type';
import { Subscription } from 'rxjs';
export interface PLayerModelState {
    player: Player;
    playList: PlaylistItem[];
    currentPlayListItem: PlaylistItem;
    currentPlayListIndex: number;
    currentPlayAddress: string;
    isMyunSyncAvailable: boolean;
    myunSyncMessage: any;
}
export declare type DanmuStyle = Pick<CSSStyleDeclaration, 'color' | 'fontSize'>;
export declare class PlayerModel extends State<PLayerModelState> {
    name: string;
    private dom;
    private option;
    private playbackPassTime;
    private playbackDocId;
    private playlist;
    private danmaku;
    private times;
    private durationVideo$;
    private immediatelyReport$;
    private intervalSubject;
    private currentPageActions;
    private barrageSpeed;
    constructor(playerId: string, option: PlayerOption);
    get isVideoExist(): boolean;
    get isDefalutLivingView(): boolean;
    get isLivingPlayback(): boolean;
    get isDocPlayback(): boolean;
    get currentPlayListItem(): PlaylistItem;
    get playback(): PlaybackConfig;
    get advertisement(): AdvertisementConfig;
    static judgeAction(currentPlayListItem: PlaylistItem): PageWatchEventActions;
    static destroyReport(subject: Subscription): void;
    getMyunSyncAvailable(): any;
    setControls(flag: boolean): void;
    play(): void;
    pause(): void;
    next(): void;
    prev(): void;
    setFullscreen(status: boolean): void;
    sendBarrage(text: string, style?: DanmuStyle): void;
    setBarrageSpeed(speed: number): void;
    init(): void;
    setup(dom: string, option: PlayerOption): void;
    loadPlay(playlist: PlaylistItem[]): void;
    destroy(): void;
}