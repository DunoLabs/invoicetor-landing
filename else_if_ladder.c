#include<stdio.h>
#include<conio.h>
void main()
{
    int m,n;
    printf("enter the value of m and n:\n");
    scanf("the answer is %d",ack(m,n));
}
int ack(intm,intn)
{
    if(m==0)
    return(n+1);
    else if (m!=0&&n==0)
    return(ack(m-1),1);
    else if (m>0&&n>0)
    return(ack m-1,ack(m,n-1));
}