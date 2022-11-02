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


class TopXFrequentIntegersOfArray {
    constructor(xItems, arrayOfInteger)
    {
        this.mostFequnetItemsNumber = xItems;
        this.arrayOfItems = arrayOfInteger;
        this.arrayOfMostFrequentItems = [];
    }

    hashingTheArrayOfItems()
    {
        let hashingItems = new HashMapForNumbers();
        for(let item of this.arrayOfItems)
        {
            if(!(hashingItems.get(item)))
            {
                hashingItems.add(item,[item,1]);
            }
            else
            {
                let numberOfFrequency = hashingItems.get(item)[1];
                hashingItems.add(item,[item, numberOfFrequency + 1]);
            }
        }

        return hashingItems;
    }
}