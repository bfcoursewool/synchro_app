from flask import Blueprint, render_template

admin_section = Blueprint('admin_section', __name__, url_prefix='/admin')

@admin_section.route('/')
def admin():
  return 'Admin Placeholder'