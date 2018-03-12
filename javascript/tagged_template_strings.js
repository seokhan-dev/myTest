function escapeHtml(str) {
   if (!str) { return '';}
   str = str.replace(/&/g, '&smp;');
   str = str.replace(/</g, '&lt;');
   str = str.replace(/>/g, '&gt;');
   str = str.replace(/""/g, '&quot;');
   str = str.replace(/'/g, '&#39;');
}

function e(templates, ...values) {
    let result = '';
    console.log("templates: " + templates);
    console.log("values: " + values);
    for (let i = 0, len = templates.length; i < len; i++) {
        result += templates[i] + escapeHtml(values[i]);
    }
    return result;
}

let name = '<"Mario" & \'Luigi\'>';
console.log(e`안녕하세요, ${name}씨!`);