
int cppFibonacci(int n)
{
    if (n <= 1)
        return n;
    return cppFibonacci(n - 1) + cppFibonacci(n - 2);
}


#include <emscripten/bind.h>
using namespace emscripten;


EMSCRIPTEN_BINDINGS(fibonacci_module)
{
    function("cppFibonacci", &cppFibonacci);
}
