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

    longestClipFromASpecificTime(specificTime)
    {
        let longestClip = false;
        let longestTimeChange = 0;

        for(let clip of this.clips)
        {
            let timeChange = clip - specificTime;

            if(clip[0] <= specificTime && timeChange > longestTimeChange)
            {
                longestTimeChange = timeChange;
                longestClip = clip;
            }
        }

        return longestClip;
    }    

}