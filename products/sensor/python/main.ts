// 输入模块 Mind+ Python 作者源：首批维护九类基础传感器及其 Python 生成规则。
//% color="#2e8b57" iconWidth=50 iconHeight=40
namespace sensor {
    //% block="接口 [PORT] 旋钮模拟值(0~100)" blockType="reporter"
    //% PORT.shadow="dropdown" PORT.options="aimech_iicport" PORT.defl="1"
    export function aimech_read_knob(parameter: any, block: any) {
        const port = parameter.PORT.code;
        Generator.addImport(`import Hiwonder_DEV`);
        Generator.addObject("", "", `knob = Hiwonder_DEV.DEV_KNOB(Hiwonder_DEV.Port(${port}))`);
        Generator.addCode(`knob.read_value()`);
    }

    //% block="接口 [PORT] 光敏模拟值(0~100)" blockType="reporter"
    //% PORT.shadow="dropdown" PORT.options="aimech_iicport" PORT.defl="1"
    export function aimech_read_light(parameter: any, block: any) {
        const port = parameter.PORT.code;
        Generator.addImport(`import Hiwonder_DEV`);
        Generator.addObject("", "", `light = Hiwonder_DEV.DEV_LIGHT(Hiwonder_DEV.Port(${port}))`);
        Generator.addCode(`light.read_value()`);
    }

    //% block="接口 [PORT] 雨滴模拟值(0~100)" blockType="reporter"
    //% PORT.shadow="dropdown" PORT.options="aimech_iicport" PORT.defl="1"
    export function aimech_get_rain_drop_value(parameter: any, block: any) {
        const port = parameter.PORT.code;
        Generator.addImport(`import Hiwonder_DEV`);
        Generator.addObject("", "", `rain = Hiwonder_DEV.DEV_RAIN(Hiwonder_DEV.Port(${port}))`);
        Generator.addCode(`rain.read_value()`);
    }

    //% block="接口 [PORT] 土壤湿度模拟值(0~100)" blockType="reporter"
    //% PORT.shadow="dropdown" PORT.options="aimech_iicport" PORT.defl="1"
    export function aimech_get_soil_value(parameter: any, block: any) {
        const port = parameter.PORT.code;
        Generator.addImport(`import Hiwonder_DEV`);
        Generator.addObject("", "", `soil = Hiwonder_DEV.DEV_SOIL(Hiwonder_DEV.Port(${port},0x5A))`);
        Generator.addCode(`soil.read_value()`);
    }

    //% block="接口 [PORT] 音量模拟值(0~100)" blockType="reporter"
    //% PORT.shadow="dropdown" PORT.options="aimech_iicport" PORT.defl="1"
    export function aimech_read_sound(parameter: any, block: any) {
        const port = parameter.PORT.code;
        Generator.addImport(`import Hiwonder_DEV`);
        Generator.addObject("", "", `sound = Hiwonder_DEV.DEV_SOUND(Hiwonder_DEV.Port(${port}))`);
        Generator.addCode(`sound.read_value()`);
    }

    //% block="接口 [PORT] 红外检测传感器检测到障碍物?" blockType="boolean"
    //% PORT.shadow="dropdown" PORT.options="aimech_iicport" PORT.defl="1"
    export function aimech_get_avoid_value(parameter: any, block: any) {
        const port = parameter.PORT.code;
        Generator.addImport(`import Hiwonder_DEV`);
        Generator.addObject("", "", `ir_${port} = Hiwonder_DEV.DEV_IR(Hiwonder_DEV.Port(${port}))`);
        Generator.addCode(`ir_${port}.read_state()`);
    }

    //% block="接口 [PORT] 触摸传感器被触碰?" blockType="boolean"
    //% PORT.shadow="dropdown" PORT.options="aimech_iicport" PORT.defl="1"
    export function aimech_read_touch(parameter: any, block: any) {
        const port = parameter.PORT.code;
        Generator.addImport(`import Hiwonder_DEV`);
        Generator.addObject("", "", `touch = Hiwonder_DEV.DEV_TOUCH(Hiwonder_DEV.Port(${port}))`);
        Generator.addCode(`touch.read_state()`);
    }

    //% block="接口 [PORT] 按键被按下" blockType="boolean"
    //% PORT.shadow="dropdown" PORT.options="aimech_iicport" PORT.defl="1"
    export function aimech_key_is_pressed(parameter: any, block: any) {
        const port = parameter.PORT.code;
        Generator.addImport(`import Hiwonder_DEV`);
        Generator.addObject("", "", `key = Hiwonder_DEV.DEV_BUTTON(Hiwonder_DEV.Port(${port}))`);
        Generator.addCode(`key.read_state()`);
    }

    //% block="端口 [ULTRA_PORT] 超声波传感器检测到障碍物的距离(cm)" blockType="reporter"
    //% ULTRA_PORT.shadow="dropdown" ULTRA_PORT.options="ultra_port" ULTRA_PORT.defl="2"
    export function get_ultrasonic_distance(parameter: any, block: any) {
        const port = parameter.ULTRA_PORT.code;
        Generator.addImport(`import Hiwonder`);
        Generator.addObject("", "", `sonar_${port} = Hiwonder.Sonar(Hiwonder.Port(${port}))`);
        Generator.addCode(`sonar_${port}.read()`);
    }
}
