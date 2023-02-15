from hstest import *


class CoffeeMachineTest(StageTest):
    @dynamic_test
    def empty_test(self):
        p = TestedProgram()
        p.start()
        if p.is_finished():
            return wrong("Your program should not terminate "
                         "immediately after starting")
        return correct()


if __name__ == '__main__':
    CoffeeMachineTest().run_tests()
