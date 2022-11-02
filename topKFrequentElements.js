class HashMapForNumbers{

    #numbers = [];
    #minusNambers = [];

    add(number,value = 0)
    {
        if(number < 0)
        {
            let numberInPositive = number * -1;
            this.#minusNambers[numberInPositive] = value;
        }
        else
        {
            this.#numbers[number] = value;
        }
    }

    get(number)
    {
        let theValue;

        if(number < 0)
        {
            let numberInPositive = number * -1;
            theValue = this.#minusNambers[numberInPositive];
        }
        else
        {
            theValue = this.#numbers[number];
        }

        if(theValue === undefined)
        {
            theValue = false;
        }

        return theValue;

    }

    clear()
    {
        this.#numbers = [];
        this.#minusNambers = [];
    }
}


class topXFrequentIntegersOfArray {
    constructor(xItems, arrayOfInteger)
    {
        this.mostFequnetItemsNumber = xItems;
        this.arrayOfItems = arrayOfInteger;
        this.arrayOfMostFrequentItems = [];
    }
}