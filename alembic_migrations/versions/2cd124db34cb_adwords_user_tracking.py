"""adwords user tracking

Revision ID: 2cd124db34cb
Revises: 5e2144a12dd4
Create Date: 2018-09-27 17:27:01.448213

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2cd124db34cb'
down_revision = '5e2144a12dd4'
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
      'adwords_users',
      sa.Column('id', sa.Integer, primary_key=True),
      sa.Column('created_at', sa.DateTime, nullable=False),
      sa.Column('gclid', sa.String(255), nullable=False),
      sa.Column('shopify_id', sa.String(255)),
      sa.Column('shopify_email', sa.String(255)),
      sa.Column('recharge_id', sa.Integer),
      sa.Column('num_of_recharges', sa.Integer)
    )
    op.create_index('adwords_users_index', 'adwords_users', ['gclid'])


def downgrade():
    op.drop_table('adwords_users')
