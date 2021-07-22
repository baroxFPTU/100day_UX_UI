const btnLogin = document.querySelector('.btn-login');
const input = document.querySelector('input[type="text"]');

btnLogin.addEventListener('click', () => {
    if (input.value == 'lenguyentieunguyen@gmail.com') {
        alert('Đăng nhập thành công!');
        alert('Loading...');
        alert('Hello Tình yêu')
        alert('Mời em vào tim anh xem có gì nào <3');
        alert('Giờ về mess với anh nhé :8');
        window.location.href = 'https://www.facebook.com/phanquocbao.barox';
        return;
    }
    alert('Đã bảo là phải dùng mail lenguyentieunguyen@gmail.com rồi :)')

})