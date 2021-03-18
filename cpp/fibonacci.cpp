#include <emscripten/bind.h>
using namespace emscripten;


int fibonacci(int n)
{
    if (n <= 1)
        return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}


class Fibonacci
{
public:
    Fibonacci(double fibValue) : fibValue(fibValue)
    {
    }

    double calculate()
    {
        if (this->fibValue <= 1)
        {
            return this->fibValue;
        }
        else
        {
            Fibonacci fib1 = Fibonacci(fibValue - 1);
            Fibonacci fib2 = Fibonacci(fibValue - 2);
            return fib1.calculate() + fib2.calculate();
        }
    }


private:
    double fibValue;
};

EMSCRIPTEN_BINDINGS(fibonacci_module)
{
    function("fibonacci", &fibonacci);

    class_<Fibonacci>("Fibonacci")
        .constructor<double>()
        .function("calculate", &Fibonacci::calculate);
}
