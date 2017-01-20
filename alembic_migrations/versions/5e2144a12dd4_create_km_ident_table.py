"""create KM ident table

Revision ID: 5e2144a12dd4
Revises: 
Create Date: 2017-01-18 15:24:21.073742

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5e2144a12dd4'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
      'km_idents',
      sa.Column('id', sa.Integer, primary_key=True),
      sa.Column('created_at', sa.DateTime, nullable=False),
      sa.Column('km_ident', sa.String(255), nullable=False),
      sa.Column('cart_string', sa.String(255), nullable=False),
      sa.Column('aliased', sa.dialects.mysql.TINYINT(unsigned=True), nullable=False, server_default='0')
    )
    op.create_index('km_idents_index', 'km_idents', ['cart_string', 'aliased'])


def downgrade():
    op.drop_table('km_idents')
