class VideoStitching {
    constructor(clips, targetTime)
    {
        this.clips = clips || null;
        this.targetTime = targetTime || null;
        this.clipsCoveredTheTargetTime = [];
    }

    findClipsCoveredTheTargetTime(starterTime)
    {
        if(starterTime = this.targetTime)
        {
            return;
        }

        let newClipCoveredAPartOfTargetTime = this.longestClipFromASpecificTime(starterTime);
        
        if(newClipCoveredAPartOfTargetTime)
        {
            this.clipsCoveredTheTargetTime.push(newClipCoveredAPartOfTargetTime);
            starterTime = newClipCoveredAPartOfTargetTime[1];
            this.findClipsCoveredTheTargetTime(starterTime);
        }                

    }

}