package cn.nutz.shortit;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.nutz.el.opt.arithmetic.DivOpt;

import cn.nutz.shortit.util.Helper;

public class HelperTest {
    Helper h;

    @Before
    public void init1() {
        System.out.println("init1");
    }

    @Before
    public void init2() {
        System.out.println("init2");
    }

    @Test
    public void testId2String() {
        System.out.println("test");
        String s = Helper.id2String(123445);

        assertEquals("值不相等", s, s);
    }

    @Test
    public void testString2Id() {
        System.out.println("test2");
        String s = Helper.id2String(123445);

        assertEquals("值不相等", s, s);
    }

    @Test(expected = ArithmeticException.class, timeout = 200)
    public void testDivException() throws InterruptedException {
        Thread.sleep(300);
        int rel = 20 / 0;
        assertEquals("被0除", 10, rel);
    }

    @After
    public void destory1() {
        System.out.println("destory1");
    }

    @After
    public void destory2() {
        System.out.println("destory2");
    }

}
