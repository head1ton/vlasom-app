# Generated by Django 2.0.8 on 2018-10-09 18:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0013_auto_20181009_0233'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='birth_day',
            field=models.CharField(choices=[('1', '1일'), ('2', '2일'), ('3', '3일'), ('4', '4일'), ('5', '5일'), ('6', '6일'), ('7', '7일'), ('8', '8일'), ('9', '9일'), ('10', '10일'), ('11', '11일'), ('12', '12일'), ('13', '13일'), ('14', '14일'), ('15', '15일'), ('16', '16일'), ('17', '17일'), ('18', '18일'), ('19', '19일'), ('20', '20일'), ('21', '21일'), ('22', '22일'), ('23', '23일'), ('24', '24일'), ('25', '25일'), ('26', '26일'), ('27', '27일'), ('28', '28일'), ('29', '29일'), ('30', '30일'), ('31', '31일')], default='09', max_length=10, verbose_name='Birth Day'),
        ),
        migrations.AlterField(
            model_name='user',
            name='birth_month',
            field=models.CharField(choices=[('1', '1월'), ('2', '2월'), ('3', '3월'), ('4', '4월'), ('5', '5월'), ('6', '6월'), ('7', '7월'), ('8', '8월'), ('9', '9월'), ('10', '10월'), ('11', '11월'), ('12', '12월')], default='10', max_length=10, verbose_name='Birth Month'),
        ),
        migrations.AlterField(
            model_name='user',
            name='birth_year',
            field=models.CharField(choices=[('2018', '2018년'), ('2017', '2017년'), ('2016', '2016년'), ('2015', '2015년'), ('2014', '2014년'), ('2013', '2013년'), ('2012', '2012년'), ('2011', '2011년'), ('2010', '2010년'), ('2009', '2009년'), ('2008', '2008년'), ('2007', '2007년'), ('2006', '2006년'), ('2005', '2005년'), ('2004', '2004년'), ('2003', '2003년'), ('2002', '2002년'), ('2001', '2001년'), ('2000', '2000년'), ('1999', '1999년'), ('1998', '1998년'), ('1997', '1997년'), ('1996', '1996년'), ('1995', '1995년'), ('1994', '1994년'), ('1993', '1993년'), ('1992', '1992년'), ('1991', '1991년'), ('1990', '1990년'), ('1989', '1989년'), ('1988', '1988년'), ('1987', '1987년'), ('1986', '1986년'), ('1985', '1985년'), ('1984', '1984년'), ('1983', '1983년'), ('1982', '1982년'), ('1981', '1981년'), ('1980', '1980년'), ('1979', '1979년'), ('1978', '1978년'), ('1977', '1977년'), ('1976', '1976년'), ('1975', '1975년'), ('1974', '1974년'), ('1973', '1973년'), ('1972', '1972년'), ('1971', '1971년'), ('1970', '1970년'), ('1969', '1969년'), ('1968', '1968년'), ('1967', '1967년'), ('1966', '1966년'), ('1965', '1965년'), ('1964', '1964년'), ('1963', '1963년'), ('1962', '1962년'), ('1961', '1961년'), ('1960', '1960년'), ('1959', '1959년'), ('1958', '1958년'), ('1957', '1957년'), ('1956', '1956년'), ('1955', '1955년'), ('1954', '1954년'), ('1953', '1953년'), ('1952', '1952년'), ('1951', '1951년'), ('1950', '1950년'), ('1949', '1949년'), ('1948', '1948년'), ('1947', '1947년'), ('1946', '1946년'), ('1945', '1945년'), ('1944', '1944년'), ('1943', '1943년'), ('1942', '1942년'), ('1941', '1941년'), ('1940', '1940년'), ('1939', '1939년'), ('1938', '1938년'), ('1937', '1937년'), ('1936', '1936년'), ('1935', '1935년'), ('1934', '1934년'), ('1933', '1933년'), ('1932', '1932년'), ('1931', '1931년'), ('1930', '1930년'), ('1929', '1929년'), ('1928', '1928년'), ('1927', '1927년'), ('1926', '1926년'), ('1925', '1925년'), ('1924', '1924년'), ('1923', '1923년'), ('1922', '1922년'), ('1921', '1921년'), ('1920', '1920년'), ('1919', '1919년')], default='2018', max_length=10, verbose_name='Birth Year'),
        ),
    ]
