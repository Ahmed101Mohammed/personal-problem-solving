class HashMapForNumbers{
    constructor()
    {
        this.numbers = [];
        this.minusNambers = [];
    }
    
    add(number,value = 0)
    {
        if(number < 0)
        {
            let numberInPositive = number * -1;
            this.minusNambers[numberInPositive] = value;
        }
        else
        {
            this.numbers[number] = value;
        }
    }

    get(number)
    {
        let theValue;

        if(number < 0)
        {
            let numberInPositive = number * -1;
            theValue = this.minusNambers[numberInPositive];
        }
        else
        {
            theValue = this.numbers[number];
        }

        if(theValue === undefined)
        {
            theValue = false;
        }

        return theValue;

    }

    clear()
    {
        this.numbers = [];
        this.minusNambers = [];
    }
}

class kConcatenationMaximumSum
{
    bigestSumOfEachIndexOfNumericArray(index = 0, numericArray, hashMap)
    {
        if(index === numericArray.length - 1)
        {
            return hashMap.add(index, numericArray[index])
        }

        if(!hashMap.get(index + 1))
        {
            this.bigestSumOfEachIndexOfNumericArray(index + 1, numericArray, hashMap);
        }

        if(hashMap.get(index+1) !== false)
        {
            hashMap.add(index, this.bigestSum(index, numericArray, hashMap));
        }
    }

    bigestSum(index, numericArray, hashMap)
    {
        const sumOfTwoIndexs = hashMap.get(index + 1) + numericArray[index];
        const indexValue = numericArray[index];
        if(sumOfTwoIndexs >= indexValue)
        {
            return sumOfTwoIndexs
        }

        return indexValue;
    }
}