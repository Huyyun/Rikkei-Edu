# Câu 2
# Tạo cơ sở dũ liệu mới có tên là CSDL_thuchanh
CREATE DATABASE CSDL_thuchanh; # Nếu CSDL CSDL_thuchanh đã tồn tại sẽ gây la lỗi
CREATE DATABASE IF NOT EXISTS CSDL_thuchanh; # Nếu CSDL CSDL_thuchanh đã tồn tại câu lệnh sẽ không thực thi và không gây ra lỗi

# Câu 3
SHOW DATABASES; # Liệt kê tất cả các cơ sở dữ liệu hiện có trên hệ thống
SHOW DATABASES LIKE '%h'; # Sử dụng điều kiện lọc để trả về danh sách các CSDL có tên kết thúc bằng chữ h

# Câu 4
# Xóa CSDL có tên CSDL_thuchanh
DROP DATABASE CSDL_thuchanh; # Nếu CSDL này không tồn tại, lệnh sẽ bị lỗi khi chạy
DROP DATABASE IF EXISTS CSDL_thuchanh; # Xóa cơ sở dữ liệu có tên CSDL_thuchanh, nhưng chỉ khi cơ sở dữ liệu này tồn tại, nếu không lệnh sẽ không thực thi và không gây lỗi.

# Câu 5
CREATE DATABASE IF NOT EXISTS CSDL_thuchanh; # Lệnh này sẽ tạo cơ sở dữ liệu CSDL_thuchanh nếu cơ sở dữ liệu này chưa tồn tại. Nếu cơ sở dữ liệu CSDL_thuchanh đã tồn tại, lệnh sẽ không làm gì và không gây lỗi.
DROP DATABASE IF EXISTS CSDL_thuchanh; # Lệnh này sẽ xóa cơ sở dữ liệu CSDL_thuchanh nếu cơ sở dữ liệu này tồn tại. Nếu cơ sở dữ liệu CSDL_thuchanh không tồn tại, lệnh sẽ không làm gì và không gây lỗi.
# Nếu cơ sở dữ liệu CSDL_thuchanh chưa tồn tại: Cơ sở dữ liệu CSDL_thuchanh sẽ được tạo và sau đó bị xóa ngay lập tức. Không có thông báo lỗi xảy ra.
# Nếu cơ sở dữ liệu CSDL_thuchanh đã tồn tại: Cơ sở dữ liệu CSDL_thuchanh sẽ bị xóa. Không có thông báo lỗi xảy ra.