 // PLEASE DON'T change function name
 module.exports = function makeExchange(currency) {
    
    //let s =10001; //currency;
    let change = {};
    change.H = 0; change.Q = 0; change.D = 0; change.N = 0; change.P = 0;
    
        
    if (currency<=0) change = {};
    
    if (currency>10000)  return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    
    
    while (currency>0 && currency<=10000)
    {
        if (currency>=50)  {currency=currency-50; change.H=change.H+1;}        //подсчет 50 центов
        else { if (currency>=25)  {currency=currency-25; change.Q=change.Q+1;} //подсчет 25 центов
        else { if (currency>=10)  {currency=currency-10; change.D=change.D+1;} //подсчет 10 центов
        else { if (currency>=5)  {currency=currency-5; change.N=change.N+1;}   //подсчет 5 центов
        else {if (currency>=1)  {currency=currency-1; change.P=change. P+1;}    //подсчет 1 цента
        }}}}}
    if (change.H==0) delete change.H;
    if (change.Q==0) delete change.Q;
    if (change.D==0) delete change.D;
    if (change.N==0) delete change.N;
    if (change.P==0) delete change.P;
return change;}