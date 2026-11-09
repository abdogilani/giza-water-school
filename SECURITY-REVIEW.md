# مراجعة الأمان — مدرسة مياه الشرب والصرف الصحي بالجيزة

## ما تم تنفيذه في Supabase
- المشروع `giza-water-school` (`cghbvfllsxfuutppmmqq`) وحالته كانت `ACTIVE_HEALTHY` عند آخر فحص.
- الجداول `achievements`, `user_roles`, `admin_audit_log` مع تفعيل RLS.
- الزائر يقرأ الإنجازات المنشورة فقط.
- حساب الإدارة المعتمد وحده يستطيع إضافة/تعديل/حذف الإنجازات وقراءة سجل التدقيق.
- `user_roles` يسمح للمستخدم المسجل بقراءة صف دوره هو فقط؛ لا توجد سياسة كتابة من المتصفح.
- صلاحية الإدارة تفحصها الدالة `private.is_admin()` خارج schema المعروض للعامة، ولا تُمنح صلاحية تنفيذها لـ anon.
- triggers تضبط بيانات المنشئ/المعدّل والتوقيت وتكتب سجل تدقيق للتغييرات.
- المتصفح يستخدم Publishable Key فقط؛ لا يوجد service-role/secret key أو كلمة مرور في ملفات الواجهة.

## حساب المدير
- `yahiayy2000@gmail.com` موجود في Auth.
- البريد مؤكد، ودوره في `public.user_roles` هو `admin`.

## اختبارات/فحوص تمت
- استعلامات قاعدة البيانات أكدت وجود الجداول والسياسات والصلاحيات المتوقعة.
- اختبار قراءة الزائر أعاد الإنجازات المنشورة.
- مستخدم مسجل عادي بلا دور مدير مُنع من INSERT عبر RLS في الاختبار السابق.
- آخر Security Advisor أعاد تحذيرًا واحدًا: `auth_leaked_password_protection` — ميزة منع كلمات المرور المعروفة بالتسريب غير مفعّلة. فعّلها من إعدادات Auth → Password Security.
- فحص الأداء السابق أظهر تنبيهات INFO لمؤشرات لم تُستخدم بعد؛ هذا متوقع قبل وجود حركة استخدام فعلية.

## ما لم يتم التحقق منه بعد
- لم يتم نشر ملفات الواجهة إلى استضافة HTTPS، ولذلك لم يتم إجراء اختبار متصفح end-to-end لتسجيل الدخول وعمليات CRUD.
- تأكد من أن `public` ضمن Exposed schemas في Data API؛ هذا الإعداد يجب التحقق منه في لوحة المشروع.
- أضف عنوان الموقع النهائي إلى Auth URL Configuration بعد اختيار الاستضافة.
- اضبط SMTP ومحددات محاولات الدخول وسياسة تأكيد البريد وفق احتياج المدرسة.
- راجع صحة أخبار الإنجازات وشروط القبول والتوظيف مع المدرسة قبل النشر العام.

## توثيق Supabase
- [Password security and leaked password protection](https://supabase.com/docs/guides/auth/password-security)
- [Securing the Data API](https://supabase.com/docs/guides/api/securing-your-api)
- [JavaScript client documentation](https://supabase.com/docs/reference/javascript/introduction)
