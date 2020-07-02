FROM ubuntu:20.04

MAINTAINER Rob Kotz "rob.m.kotz@gmail.com"

EXPOSE 5000

RUN apt-get -y update && \
	apt-get -y install wget vim unzip python3-pip python3-dev libpython3-dev git libmysqlclient-dev libssl-dev mysql-client \
	&& groupadd flaskgroup && useradd -m -g flaskgroup -s /bin/bash flask \
	&& mkdir -p /home/flask/app

WORKDIR /home/flask/app

RUN pip3 install virtualenv

COPY requirements.txt /home/flask/app

RUN virtualenv ../venv \
  && ../venv/bin/pip3 install -r requirements.txt \
  && ../venv/bin/pip3 install gunicorn

COPY . /home/flask/app
RUN ../venv/bin/python3 setup.py install \
  && chown -R flask:flaskgroup /home/flask/ 

USER flask

RUN echo "source ~/venv/bin/activate" >> ~/.bashrc
