function formatDate(date) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    let formattedDate = new Date(date).toLocaleDateString('th-TH', options);
    formattedDate = formattedDate.replace(/ /g, '-').replace(/\./g, '');
    const months = ['ม.ค', 'ก.พ', 'มี.ค', 'เม.ย', 'พ.ค', 'มิ.ย', 'ก.ค', 'ส.ค', 'ก.ย', 'ต.ค', 'พ.ย', 'ธ.ค'];
    
    months.forEach(month => {
        const regex = new RegExp(month.replace('.', ''), 'g');
        formattedDate = formattedDate.replace(regex, month);
    });

    return formattedDate;
}


function generateRandomTimes(startTime, count) {
    let times = [];
    let currentTime = new Date(startTime);

    while (times.length < count) {
        times.push(new Date(currentTime));
        const minutesToSubtract = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        const secondsToSubtract = Math.floor(Math.random() * 60);
        currentTime.setMinutes(currentTime.getMinutes() - minutesToSubtract);
        currentTime.setSeconds(currentTime.getSeconds() - secondsToSubtract);

        if (currentTime.getHours() < 9) {
            currentTime.setDate(currentTime.getDate() - 1);
            currentTime.setHours(21, 0, 0, 0);
        }
    }

    return times;
}

function getRandomText() {
    const texts = [
        "KBANK x3592 น.ส. ลักขณา ทวาดิตร์", "SCB x6942 นาย ตนพล มัคคะที",
        "BAAC x1342 น.ส. วรวรรณ แก้วกัณหา", "TTB x4700 นาย กัญญาณัฐ อุ่นแสง",
        "SCB x1001 นาย โชคชัย ปัญญา", "KBANK x4378 น.ส. ฐิตาภา ยอดใบ",
        "KTB x7101 นาย ธนาชัย อุดมศักดิ์ศิริ", "BAY x0579 นาย อาณาจักร เจนด่านกลาง",
        "SCB x1990 น.ส. ศุภลักษณ์ ลันนันท์", "SCB x7891 นาย ณัฐธิดา บูชาลี",
        "KBANK x4521 น.ส. ศิรลักษณ์ บุตรชา", "TTB x7441 น.ส. ขันทอง จุลเต",
        "BBL x4931 นาย ปัญญา ทับเอี่ยม", "BAAC x7796 นาย พาราดอน สินสมุทร",
        "SCB x1103 น.ส. ภิลาวรรณ์ สอนเสน", "KBANK x4644 น.ส. บัณฑิต วังวรน",
        "KKP x9631 น.ส.กมลทิพย์ อุปวงษ์", "BAAC x8854 นาย อุกฤษ ถวิลวรรณะ",
        "KTB x6341 น.ส. ณัฐมน คำสะอาด", "KBANK x4410 นาย พิพัฒน์ ภูทวี",
        "BBL x8520 นาย สมชัย แก่นนาคำ", "BAAC x4210 น.ส. ระพีพร เล็กวิญญาณ",
        "SCB x5390 นาง มนชยา ไทยใหม่", "SCB x9906 น.ส. สุจิตรา คล้ายแก้ว",
        "SCB x9137 นาย ณัฐรุจ อาษาพา", "KBANK x8216 นาย บุณยนุช ชะม้อย",
        "KBANK x8314 นาย ศศิเพชร ถือพุทรา", "BAY x5881 นาย ชาย พุทธภาวี",
        "KTB x3942 น.ส. วรรณนิศา แก้วบุตร", "KKP x0012 น.ส. วาสนา หล่อเหลี่ยม",
        "KBANK x4377 น.ส. อามานี มาหะมิง", "SCB x4674 น.ส. สุภาพร พรมภักดี",
        "KTB x9971 นาย ปริญญา สวัสดี", "GSB x4309 น.ส. รัตนาภรณ์ จันทวี",
        "SCB x1094 น.ส. ศิริวรรณ กวานกลม", "BAAC x0004 น.ส. ขวัญจิตร เกื้อเอียด",
        "GSB x5541 นาง บานเย็น สร้อยพูล", "TTB x9415 น.ส. มุฐิตา ดวงจิต",
        "KBANK x6284 น.ส กรองทอง โจทย์รัมย์", "BAY x6151 น.ส. ชลธิชา ปิตธวัชชัย",
        "GSB x0023 นาย บารนาบัส ประทุมรัตน์", "CIMBT x9055 นาย ธานี ศรีรุ่งเรือง",
        "KTB x6135 น.ส. สุภาพร รัตนรัตน์", "BAY x9770 นาย โกมินทร์ แก้วจวง",
        "UOB x6640 นาย ณรงศ์ฤทธิ์ ถกลจิตร", "KBANK x5977 น.ส. ปภาดา เมืองแดง",
        "TTB x0011 นาย วงเพ็ชร ภูปาง", "KBANK x4110 น.ส. ณภัทร กิจอาจเมธา"
    ];

    return texts[Math.floor(Math.random() * texts.length)];
}

function generateRandomMessage() {
    const messages = [
        "012351192516AORO1953", "012351123956AOR01695", "012354523659AOR06300",
        "012355621234BOR05349", "012351162369BOR01352", "012355634569COR01930",
        "012351142972BOR01100", "012354231539BOR00093", "012356513452AOR04319",
        "012341142934COR00013", "012351423549COR06620", "012351172364COR05593",
        "012344412345AOR04319", "012355211023BOR01366", "012341123456BOR01090",
        "012351249374AOR04319", "012351423459COR00079", "012347752169AOR04109"
    ];

    return messages.sort(() => 0.5 - Math.random()).slice(0, 16);
}

function generateRandomAmounts() {
    const amounts = [
        "50,000.00", "170,000.00", "80,000.00", "60,000.00", "160,000.00", 
        "1,050,000.00", "100,000.00", "350,000.00", "110,000.00", "50,000.00",
        "50,000.00", "700,000.00", "60,000.00", "500,000.00", "130,000.00",
        "150,000.00", "50,000.00", "110,000.00"
    ];

    return amounts.sort(() => 0.5 - Math.random()).slice(0, 16);
}

function generateZeroAmounts() {
    const zeroAmounts = Array(16).fill("0.00");
    return zeroAmounts;
}

function generateAdditionalMessages() {
    const additionalMessages = [
        "K0526309", "K0529630", "K0521123", "K0524692", "K0525390",
        "K0524249", "K0524394", "K0521219", "K0521100", "K0521233",
        "K0526369", "K0529634", "K0524241", "K0521239", "K0524240",
        "K0520093", "K0524300", "K0524193"
    ];

    return additionalMessages.sort(() => 0.5 - Math.random()).slice(0, 16);
}

function generateStatement() {
    const dateInput = document.getElementById('date').value;
    const timeInput = document.getElementById('time').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const accountName = document.getElementById('accountName').value;
    let dateTime = new Date(`${dateInput}T${timeInput}`);

    if (timeInput < "09:00:00") {
        dateTime.setDate(dateTime.getDate() - 1);
        dateTime.setHours(21, 0, 0, 0);
    }

    const rows = [];
    const randomMessages = generateRandomMessage();
    const randomAmounts = generateRandomAmounts();
    const zeroAmounts = generateZeroAmounts();
    const randomTimes = generateRandomTimes(dateTime, 16);
    const additionalMessages = generateAdditionalMessages();
    
    for (let i = 0; i < 16; i++) {
        const date = formatDate(randomTimes[i]);
        const time = randomTimes[i].toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const text = getRandomText();
        const randomMessage = randomMessages[i];
        const randomAmount = randomAmounts[i];
        const zeroAmount = zeroAmounts[i];
        const additionalMessage = additionalMessages[i];
        const transactionEffectDate = formatDate(randomTimes[i]);

        rows.push({ date, time, text, randomMessage, randomAmount, zeroAmount, additionalMessage, transactionEffectDate });
    }

    localStorage.setItem('statementData', JSON.stringify(rows));

    const outputWindow = window.open('', '', 'width=1063,height=965');
    outputWindow.document.write(`
        <!DOCTYPE html>
        <html lang="th">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bank Statement</title>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div class="container">
                
                <div class="statement-content">
                    <p style="position: absolute; top: 289px; left: 48px;font-size: 20px;letter-spacing: -0.25px;">${accountNumber}</p>
                    <p style="position: absolute; top: 350px; left: 25px;font-size: 22px;letter-spacing: -0.25px;">${accountName}- <span style="color:#00d833;">${accountNumber}</span> </p>
                    ${rows.map((row, index) => `
                        <p style="position: absolute; top: ${464 + index * 25}px; left: 35px;font-size: 19px;letter-spacing: -0.25px;">${row.date}</p>
                        <p style="position: absolute; top: ${464 + index * 25}px; left: 140px;font-size: 19px;letter-spacing: -0.25px;">${row.time}</p>
                        <p style="position: absolute; top: ${464 + index * 25}px; left: 224px; font-size: 19px; letter-spacing: -0.7px;">${row.text}</p>
                        <p style="position: absolute; top: ${464 + index * 25}px; left: 427px;font-size: 19px;letter-spacing: -0.7px;">${row.randomMessage}</p>
                        <p style="position: absolute; top: ${464 + index * 25}px; left: 640px;font-size: 19px;letter-spacing: -0.7px;text-align: center; transform: translateX(-100%);">${row.randomAmount}</p>
                        <p style="position: absolute; top: ${464 + index * 25}px; left: 810px;font-size: 19px;letter-spacing: -0.25px;text-align: center; transform: translateX(-100%);">${row.zeroAmount}</p>
                        <p style="position: absolute; top: ${464 + index * 25}px; left: 845px;font-size: 19px;letter-spacing: -0.25px;">${row.additionalMessage}</p>
                        <p style="position: absolute; top: ${464 + index * 25}px; left: 922px;font-size: 19px;letter-spacing: -0.25px;">${row.transactionEffectDate}</p>
                    `).join('')}
                    <p style="position: absolute; top: 288px; left: 708px;font-size: 20px;letter-spacing: -0.25px;">${formatDate(randomTimes[0])}</p>
                    <p style="position: absolute; top: 288px; left: 543px;font-size: 20px;letter-spacing: -0.25px;">${formatDate(randomTimes[randomTimes.length - 1])}</p>
                </div>
            </div>
        </body>
        </html>
    `);
}
