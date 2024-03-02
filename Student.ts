class Student
{
    private name:string;
    private mark:number;

    public constructor(name:string, mark:number)
    {
        this.name = name;
        this.mark = mark;
    }

    public getName():string
    {
        return this.name;
    }

    public getMark():number
    {
        return this.mark;
    }
}
export default Student;