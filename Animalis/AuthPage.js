import React, { useEffect } from 'react';

const TestApi = () => {
    // دالة اختبار الاتصال بالخادم
    const testApiConnection = async () => {
        try {
            const response = await fetch('http://localhost:3000/test'); // طلب GET إلى API
            const data = await response.json(); // تحويل الاستجابة إلى JSON
            console.log(data); // طباعة البيانات في Console
            alert(data.message); // إظهار رسالة النجاح
        } catch (error) {
            console.error('Error connecting to API:', error); // طباعة أي خطأ
            alert('Failed to connect to API'); // إظهار رسالة الخطأ
        }
    };

    // استدعاء الدالة عند تحميل المكون
    useEffect(() => {
        testApiConnection(); // استدعاء الدالة
    }, []);

    return (
        <div>
            <h1>Testing API Connection</h1>
        </div>
    );
};

export default TestApi;

