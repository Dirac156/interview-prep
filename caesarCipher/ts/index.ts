function getAsciiCode(char: string): number {
    return char.charCodeAt(0);
}

function getLetterFromAsciiCode(chars: number[]): string {
    return String.fromCharCode(...chars);
}

function computeAsciiCode(asciicode: number, shift: number, extreme: number): number {
    return asciicode + shift > extreme ? asciicode + shift - 26 : asciicode + shift;
}

function computeShift(shift: number): number {
    let rem: number = shift / 26;
    if ( rem < 1) return shift;
    return computeShift(shift - 26);
}

function shifCharacter(char: number, shift: number): number {
    let shiftedChar = char;
    if (char >= 65 && char <= 90) {
        shiftedChar = computeAsciiCode(char, computeShift(shift), 90);
    } else if (char >= 97 && char <= 122) {
        shiftedChar = computeAsciiCode(char, computeShift(shift), 122);
    }
    return shiftedChar;
}

function shiftCharacters(char: number[], shift: number): number[] {
    return char.map(asciicode => shifCharacter(asciicode, shift));
}

/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s: string, k: number): string {
    // Write your code here
    let changedMessageCode: number[] = []
    for (let idx = 0; idx < s.length; idx++) {
        changedMessageCode.push(getAsciiCode(s[idx]));
    }
    return getLetterFromAsciiCode(shiftCharacters(changedMessageCode, k));
}


