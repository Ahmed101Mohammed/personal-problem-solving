class VideoStitching {
    constructor(clips, targetTime)
    {
        this.clips = clips || null;
        this.targetTime = targetTime || null;
        this.clipsCoveredTheTargetTime = [];
    }

}