class VideoStitching {
    constructor(clips, targetTime)
    {
        this.clips = clips || null;
        this.targetTime = targetTime || null;
        this.clipsCoveredTheTargetTime = [];
        this.findClipsCoveredTheTargetTime(0);
        this.isTheCoveredClipsRight();
    }

    findClipsCoveredTheTargetTime(starterTime)
    {
        if(starterTime >= this.targetTime)
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
            let timeChange = clip[1] - specificTime;

            if(clip[0] <= specificTime && timeChange > longestTimeChange)
            {
                longestTimeChange = timeChange;
                longestClip = clip;
            }
        }

        return longestClip;
    }    

    isTheCoveredClipsRight()
    {
        if(this.clipsCoveredTheTargetTime.length === 0)
        {
            return false;
        }

        let startTime = this.clipsCoveredTheTargetTime[0][0];
        let endTime = this.clipsCoveredTheTargetTime[this.clipsCoveredTheTargetTime.length - 1][1];

        if(startTime === 0 && endTime >= this.targetTime)
        {
            return true;
        }
        this.clipsCoveredTheTargetTime = [];
        return false;
    }

    getTheNumberOfclipsCoveredTheTargetTime()
    {
        if(this.clipsCoveredTheTargetTime.length > 0)
        {
            return this.clipsCoveredTheTargetTime.length;
        }

        return -1;
    }

}