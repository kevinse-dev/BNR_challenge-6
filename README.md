# BNR_challenge-6
Project ini adalah web app sederhana untuk memanipulasi data atau biasa disebut CRUD (Create Read Update Delete) menggunakan database.

### Yang saya dapatkan dari challenge ini adalah:
  * Database
    
      Database adalah kumpulan data yang di simpan secara sistematis di dalam komputer. Data tersebut
      dapat diolah atau dimanipulasi dengan perangkat lunak
      (software)/program/aplikasi untuk menghasilkan informasi.
      
      * Relational Database
      
          Relational Database atau basis data relasional adalah basis data yang mengorganisir berdasarkan model hubungan data. Banyak sekali perangkat lunak yang menggunakan sistem ini untuk mengatur dan memelihara basis data melalui hubungan setiap data. Umumnya, semua sistem menggunakan Structured Query Language (SQL) sebagai bahasa pemrograman untuk pemeliharaan basis data dan query.
      
      * Non-Relational Database
          
          Non-Relational Database dibuat dengan tujuan khusus untuk model data spesifik dan memiliki skema fleksibel untuk membuat aplikasi modern. Database NoSQL dikenal secara luas karena kemudahan pengembangan, fungsionalitas, dan kinerja dalam berbagai skala.
 * SQL
    
    SQL adalah bahasa query yang di rancang untuk mengambil informasi tertentu dari database.
    
    di dalam SQL, query-query ini di golongkan menjadi 4 jenis:
      * Data Definition Lenguage (DDL)
      
        * CREATE
        
            untuk menambahkan database baru.
            
        * ALTER
        
            untuk mengubah struktur tertentu di dalam database.
            
        * DROP
        
            untuk menghapus database.
        
        
      * Data Manipulation Lenguage (DML)
        
        * SELECT
        
            untuk mencari data di dalam database.
            
        * INSERT    
            
            untuk memasukkan baris data baru di dalam
            sebuah table.
        
        * UPDATE
        
            untuk memperbaharui suatu data di dalam table database.
            
        * DELETE
        
            untuk menghapus suatu data di dalam table database.
        
        
      * Data Control Lenguage (DCL)
        
        * GRANT
            
            untuk memberikan hak akses kepada pengguna.
            
        * REVOKE
        
            untuk mencabut hak akses kepada pengguna yang melalui perintah GRANT
        
      
      Pembahasan tingkat lanjut : <details>
           <summary>Transaction Control Lenguage (TCL)</summary>
          <li>BEGIN</li>
          <li>COMMIT</li>
          <li>ROLLBACK</li>
         </details>
        
 * ORM (Object Relational Mapping)
    
    ORM (Object Relation Mapping) merupakan teknik yang merubah suatu table menjadi sebuah object yang nantinya mudah untuk digunakan. Object yang dibuat memiliki property yang sama dengan field — field yang ada pada table tersebut.
        
    * Sequelize
    
        Sequelize adalah pustaka ORM Node.js untuk Postgres, MySQL, MariaDB, SQLite, dan Microsoft SQL Server yang memetakan tabel dalam database dan hubungannya dengan kelas. Saat menggunakan Sequelize, kita tidak harus menulis kueri SQL, tetapi kita harus bekerja dengan data seperti objek biasa. Ini memiliki dukungan transaksional yang kuat, hubungan, pemuatan aktif dan lambat, replikasi baca, dan banyak lagi.
        
        beberapa fitur yang ada di package Sequelize :
        
          * Migration
          
              Migration ini juga bisa kita pakai untuk melakukan setup
              database aplikasi kita, di manapun aplikasi itu akan
              dijalankan. Nah, bagian yang kita setup dengan migration
              adalah yang berkaitan dengan DDL. Jadi, semua query
              yang berhubungan dengan DDL, kita definisikan melalui
              migration.
              
          * Models
          
              Model ini bisa dikatakan sebuah fitur yang bertugas untuk
              menghubungkan antara database dengan logic dalam
              mengambil data. Jadi, dengan menggunakan model, kita bisa
              merepresentasikan suatu table di dalam database yang ada di
              aplikasi NodeJS.
              
          * Seeders
          
              Seeder adalah sebuah fitur yang digunakan untuk membuat data
              dummy atau data sembarang yang bersifat sementara. Selain
              bisa kita implementasikan untuk tahap development, seeder juga
              bisa kita gunakan untuk membuat data-data yang bersifat tetap,
              misalnya data yang berisi daftar provinsi dan kota, karena data
              tersebut akan tetap sama. Nah, kenapa kita memerlukan seeder?
              Karena akan sangat memudahkan kita untuk menguji aplikasi
              dengan data awal tersebut.
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
